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
  @ViewChild('taskContent') taskContent!: ElementRef;
  @ViewChild('editBtn') editBtn!: ElementRef;
  edit() {
    this.editing = 'editing'
    this.editTextStyle = 'edit-text-style'
    this.editMode = true
    this.taskContent.nativeElement.contentEditable = "true"
    this.editBtn.nativeElement.disabled = "true"
    this.taskContent.nativeElement.style.outline = "none"
    this.taskContent.nativeElement.focus()
    if (typeof window.getSelection != "undefined"
      && typeof document.createRange != "undefined") {
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
    this.loading = true
    this.editMode = false
    this.taskContent.nativeElement.contentEditable = "false"
    this.editBtn.nativeElement.disabled = "false"
    this.task.title = this.taskContent.nativeElement.innerText
    this.todosSvc.addOrUpdate(this.task, this.task.id).then(res => {
      this.onUpdate.emit(this.task)
      this.loading = false
      this.editing = ''
      this.editTextStyle = ''
    })

  }
  complete() {
    this.loading = true
    this.task.completed = true
    this.todosSvc.addOrUpdate(this.task, this.task.id).then(res => {
      this.onUpdate.emit(this.task)
      this.loading = false
      this.active = 'active'
    })
  }

}
