import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-help-readme',
  templateUrl: './help-readme.component.html',
  styleUrl: './help-readme.component.scss'
})
export class HelpReadmeComponent {
  constructor(private titleSvc: Title) { }
  ngOnInit() {
    this.titleSvc.setTitle('myTodo List | Guida all\'uso');
  }
}
