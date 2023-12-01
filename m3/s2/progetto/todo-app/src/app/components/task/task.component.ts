import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  editMode: boolean = false
  @Input() loading: boolean = false
  @Input() task!: Todo
  @Output() onDelete: EventEmitter<number> = new EventEmitter()
  @Output() onUpdate: EventEmitter<Todo> = new EventEmitter()
  deleteTask() {
    this.onDelete.emit(this.task.id)
    this.loading = true
  }
  @ViewChild('taskElement') taskElement!: ElementRef;
  @ViewChild('editBtn') editBtn!: ElementRef;
  edit() {
    this.editMode = true
    this.taskElement.nativeElement.contentEditable = "true"
    this.editBtn.nativeElement.disabled = "true"

  }
  save() {
    this.editMode = false
    this.taskElement.nativeElement.contentEditable = "false"
    this.editBtn.nativeElement.disabled = "false"
    this.task.title = this.taskElement.nativeElement.innerText
    this.onUpdate.emit(this.task)
  }
  complete() {
    this.task.completed = true
    this.onUpdate.emit(this.task)
  }

}
