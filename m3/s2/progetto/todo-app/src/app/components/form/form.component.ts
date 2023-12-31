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
  @Output() onAdd: EventEmitter<Partial<Todo>> = new EventEmitter()
  @Input() loading: boolean = false
  add() {
    if (this.newTask.title) {
      this.newTask.completed = false
      this.onAdd.emit(this.newTask)
      this.newTask = {}
    }
  }
}
