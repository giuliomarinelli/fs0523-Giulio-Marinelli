import { Component, OnInit } from '@angular/core';
import { IPosts } from '../../iposts';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent implements OnInit {
  posts: IPosts[] = []
  constructor(private postsService: PostsService) { }
  ngOnInit() {
    this.posts = this.postsService.posts
  }
  getInactivePosts() {
    return this.posts.filter(el => el.disponibile === false)
  }
}
