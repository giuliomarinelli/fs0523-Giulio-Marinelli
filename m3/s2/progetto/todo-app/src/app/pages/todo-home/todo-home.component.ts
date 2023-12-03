import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrl: './todo-home.component.scss'
})
export class TodoHomeComponent {
  public constructor(private titleSvc: Title) { }
  ngOnInit() {
    this.titleSvc.setTitle('myTodo List | Tutti i task (Todos)');
  }
}
