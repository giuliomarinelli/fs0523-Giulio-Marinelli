import { Component, Injectable, OnInit } from '@angular/core';
import { IPosts } from '../../iposts';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent implements OnInit {

  posts: IPosts[] = []
  constructor(private postsService: PostsService) { }
  ngOnInit() {
    this.posts = this.postsService.posts
  }
  getActivePosts() {
    return this.posts.filter(el => el.disponibile === true)
  }
}
