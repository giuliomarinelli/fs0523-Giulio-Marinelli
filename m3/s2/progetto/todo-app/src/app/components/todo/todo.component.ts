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
  loadingForm: boolean = false
  noTodos: boolean = false
  completati: string = ''
  initialHeight: string = ''
  initialTodoHeight: string = ''
  initialLoaderHeight: string = ''
  p5: string = ''
  @Input() onlyCompleted!: boolean
  ngOnInit() {
    if (!this.onlyCompleted) {
      this.initialHeight = 'initial-height-home'
      this.initialTodoHeight = 'initial-todo-height-home'
      this.initialLoaderHeight = 'initial-loader-height-home'
      this.todosSvc.getAll().then(todos => {
        this.todos = todos
        this.todos.reverse()
        this.contentLoaded = true
        if (!this.todos.length) this.noTodos = true
        this.p5 = 'p-5'
      })
    } else {
      this.initialHeight = 'initial-height-completed'
      this.initialTodoHeight = 'initial-todo-height-completed'
      this.initialLoaderHeight = 'initial-loader-height-completed'
      this.todosSvc.getOnlyCompleted().then(todos => {
        this.todos = todos
        this.completati = ' completati'
        this.todos.reverse()
        this.contentLoaded = true
        if (!this.todos.length) this.noTodos = true
        this.p5 = 'p-5'
      })
    }

  }

  add(task: Partial<Todo>) {
    this.loadingForm = true
    task.edited = false
    task.added = new Date()
    task.completedDate = new Date(0, 0, 0, 0, 0, 0, 0)
    task.restoredToIncomplete = false
    this.todosSvc.addOrUpdate(task).then(res => {
      this.todos.unshift(res)
      this.loadingForm = false
      if (this.noTodos) this.noTodos = false
    })
  }

  deleteTask(id: number) {
    const ind = this.todos.findIndex(el => el.id === id)
    this.todos.splice(ind, 1)
    if (this.todos.length === 0) this.noTodos = true
  }

  update(task: Todo) {
    const ind = this.todos.findIndex(el => el.id === task.id)
    if (this.onlyCompleted && !task.completed) {
      this.todos.splice(ind, 1)
      if (this.todos.length === 0) this.noTodos = true
    } else {
      this.todos.splice(ind, 1, task)
    }
  }
}
