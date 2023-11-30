import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { IPost } from '../../Models/ipost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  constructor(private postSvc: ServiceService, public route: ActivatedRoute) {}
  post!: IPost
  attivo!: string
  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      this.post = this.postSvc.getPostById(Number(param.id))
      this.post.active ? this.attivo = 'sì' : this.attivo = 'no'
    })
  }
}
