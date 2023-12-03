import { Component, Input } from '@angular/core';
import { TodosService } from '../../todos.service';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  constructor(private todosSvc: TodosService) { }
  contentLoaded: boolean = false;
  todos!: Todo[]
  loading: boolean = false
  loadingForm: boolean = false
  noTodos: boolean = false
  @Input() onlyCompleted!: boolean
  ngOnInit() {
    if(!this.onlyCompleted) {
    this.todosSvc.getAll().then(todos => {
      this.todos = todos
      this.todos.reverse()
      this.contentLoaded = true
      if (!this.todos.length) this.noTodos = true

    })
  } else {
    this.todosSvc.getOnlyCompleted().then(todos => {
      this.todos = todos
      this.todos.reverse()
      this.contentLoaded = true
      if (!this.todos.length) this.noTodos = true
    })
  }

  }

  add(task: Partial<Todo>) {
    this.loadingForm = true
    this.todosSvc.addOrUpdate(task).then(res => {
      this.todos.unshift(res)
      this.loadingForm = false
    })
  }

  deleteTask(id: number) {
      const ind = this.todos.findIndex(el => el.id === id)
      this.todos.splice(ind, 1)
  }

  update(task: Todo) {
    const ind = this.todos.findIndex(el => el.id === task.id)
      this.todos.splice(ind, 1, task)
  }
}
