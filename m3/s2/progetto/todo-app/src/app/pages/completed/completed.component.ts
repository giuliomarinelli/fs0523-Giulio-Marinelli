import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  constructor(private titleSvc: Title) { }
  ngOnInit() {
    this.titleSvc.setTitle('myTodo List | Task completati');
  }
}
