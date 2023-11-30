import { Component, OnInit } from '@angular/core';
import { IPost } from '../../Models/ipost';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent implements OnInit{
  activePosts: IPost[] = []
  constructor(private postSvc: ServiceService) {}
  updatePosts() {
    this.activePosts = this.postSvc.getActivePosts()
  }
  updateStatus(id: number) {
    this.postSvc.updateStatus(id)
    this.updatePosts()
  }
  ngOnInit() {
    this.updatePosts()
  }
}
