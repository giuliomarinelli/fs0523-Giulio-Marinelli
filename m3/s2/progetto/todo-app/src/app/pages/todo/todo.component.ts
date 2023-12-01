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
  @Input() onlyCompleted!: boolean
  ngOnInit() {
    if(!this.onlyCompleted) {
    this.todosSvc.getAll().then(todos => {
      this.todos = todos
      this.todos.reverse()
      this.contentLoaded = true

    })
  } else {
    this.todosSvc.getOnlyCompleted().then(todos => {
      this.todos = todos
      this.todos.reverse()
      this.contentLoaded = true
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
    this.todosSvc.remove(id).then(res => {
      const ind = this.todos.findIndex(el => el.id === id)
      this.todos.splice(ind, 1)

    })

  }

  update(task: Todo) {
    this.todosSvc.addOrUpdate(task, task.id)
  }
}
