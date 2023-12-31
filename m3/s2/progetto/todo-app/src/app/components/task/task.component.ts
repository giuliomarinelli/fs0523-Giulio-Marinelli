import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  constructor(private todosSvc: TodosService) { }
  active: string = ''
  editing: string = ''
  editTextStyle: string = ''
  editMode: boolean = false
  loading: boolean = false
  @Input() task!: Todo
  @Output() onDelete: EventEmitter<number> = new EventEmitter()
  @Output() onUpdate: EventEmitter<Todo> = new EventEmitter()
  ngOnInit() {
    if (this.task.completed) this.active = 'active'
  }
  deleteTask() {
    this.loading = true
    this.todosSvc.remove(this.task.id).then(res => {
      this.onDelete.emit(this.task.id)
      this.loading = false
    })
  }
  @ViewChild('taskContent') taskContent!: ElementRef
  originalTitle!: string

  edit() {

    this.originalTitle = this.task.title
    this.editing = 'editing'
    this.editTextStyle = 'edit-text-style'
    this.editMode = true
    this.taskContent.nativeElement.contentEditable = "true"
    this.taskContent.nativeElement.style.outline = "none"
    this.taskContent.nativeElement.focus()
    if (typeof window.getSelection !== "undefined"
      && typeof document.createRange !== "undefined") {
      const range: Range = document.createRange();
      range.selectNodeContents(this.taskContent.nativeElement);
      range.collapse(false);
      const sel: Selection | null = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }



  save() {
    if (this.taskContent.nativeElement.innerText) {
      const objCopy: Todo = { ...this.task }
      this.loading = true
      this.taskContent.nativeElement.contentEditable = "false"
      objCopy.title = this.taskContent.nativeElement.innerText
      objCopy.edited = true
      this.todosSvc.addOrUpdate(objCopy, objCopy.id).then(res => {
        this.task = res
        this.onUpdate.emit(this.task)
        this.loading = false
        this.editing = ''
        this.editTextStyle = ''
        this.editMode = false
      })
    } else {
      this.cancel()
    }
  }

  cancel() {
    this.editMode = false
    this.taskContent.nativeElement.innerHTML = this.originalTitle
    this.task.title = this.originalTitle
    this.editTextStyle = ''
    this.editing = ''
  }

  setIncomplete() {
    const objCopy: Todo = { ...this.task }
    if (!objCopy.restoredToIncomplete) objCopy.restoredToIncomplete = true
    this.loading = true
    objCopy.completed = false
    this.todosSvc.addOrUpdate(objCopy, objCopy.id).then(res => {
      this.task = res
      this.onUpdate.emit(this.task)
      this.loading = false

    })
  }

  setComplete() {
    const objCopy: Todo = { ...this.task }
    if (objCopy.restoredToIncomplete) objCopy.restoredToIncomplete = false
    objCopy.completedDate = new Date()
    this.loading = true
    objCopy.completed = true
    this.todosSvc.addOrUpdate(objCopy, objCopy.id).then(res => {
      this.task = res
      this.onUpdate.emit(this.task)
      this.loading = false
    })
  }

}
