import { post } from 'selenium-webdriver/http';
import { PostService } from './../../services/post.service';
import { Post } from './../../services/model/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post: Post;
  private id: number;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
      this.postService.getById(this.id).subscribe(res => {
        this.post = res.data;
      });
  }
}
