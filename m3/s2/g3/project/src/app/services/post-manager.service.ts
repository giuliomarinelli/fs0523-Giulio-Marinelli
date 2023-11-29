import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost'

@Injectable({
  providedIn: 'root'
})
export class PostManagerService {
  posts: IPost[] = [
    {
      id: 1,
      body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio',
      title: 'Post 1',
      active: true,
      type: 'politic'
    },
    {
      id: 2,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      title: 'Post 2',
      active: false,
      type: 'education'
    },
    {
      id: 3,
      body: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      title: 'Post 3',
      active: false,
      type: 'news'
    },
    {
      id: 4,
      body: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish',
      title: 'Post 4',
      active: false,
      type: 'politic'
    },
    {
      id: 5,
      body: 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
      title: 'Post 5',
      active: true,
      type: 'education'
    },
    {
      id: 6,
      body: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      title: 'Post 6',
      active: true,
      type: 'news'
    }
  ]

  getPosts(active?: string): IPost[] {
    if (active) {
      switch (active) {
        case 'active':
          return this.posts.filter(p => p.active)
        case 'inactive':
          return this.posts.filter(p => !p.active)
      }
    }
    return this.posts
  }

  updatePost(id: number) {
    const postIndex = this.posts.findIndex(p => p.id === id)
    if(postIndex) this.posts[postIndex].active = !this.posts[postIndex].active
  }

  constructor() { }
}
