import { Component } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  inactivePosts: IPost[] = []
  constructor(private postSvc: ServiceService) {}
  updatePosts() {
    this.inactivePosts = this.postSvc.getInactivePosts()
  }
  updateStatus(id: number) {
    this.postSvc.updateStatus(id)
    this.updatePosts()
  }
  ngOnInit() {
    this.updatePosts()
  }
}
