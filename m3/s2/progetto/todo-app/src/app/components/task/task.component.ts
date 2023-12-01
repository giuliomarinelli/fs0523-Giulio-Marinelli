import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  constructor(private todosSvc: TodosService) {}
  active: string = ''
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
  @ViewChild('taskElement') taskElement!: ElementRef;
  @ViewChild('editBtn') editBtn!: ElementRef;
  edit() {
    this.editMode = true
    this.taskElement.nativeElement.contentEditable = "true"
    this.editBtn.nativeElement.disabled = "true"

  }
  save() {
    this.loading = true
    this.editMode = false
    this.taskElement.nativeElement.contentEditable = "false"
    this.editBtn.nativeElement.disabled = "false"
    this.task.title = this.taskElement.nativeElement.innerText
    this.todosSvc.addOrUpdate(this.task, this.task.id).then(res => {
      this.onUpdate.emit(this.task)
      this.loading = false
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
