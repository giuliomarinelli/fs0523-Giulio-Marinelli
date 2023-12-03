import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss'
})
export class Error404Component {
  public constructor(private titleSvc: Title) { }
  ngOnInit() {
    this.titleSvc.setTitle('myTodo List | Errore 404');
  }
}
