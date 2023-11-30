import { Component, Input } from '@angular/core';
import { IPost } from '../Models/ipost';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent {
  @Input() post!: IPost

  classPost() {
    return {
      'bg-warning': this.post.type === 'news',
      'bg-black': this.post.type === 'politic',
      'text-white': this.post.type === 'politic',
      'bg-primary': this.post.type === 'education'
    }
  }
}
