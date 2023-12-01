import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  newTask: Partial<Todo> = {}
  constructor(private todosSvc: TodosService) {}
  @Output() onAdd: EventEmitter<Partial<Todo>> = new EventEmitter()
  @Input() loading: boolean = false
  add() {
    this.newTask.completed = false
    this.onAdd.emit(this.newTask)
    this.newTask = {}
    this.loading = true
  }
}
