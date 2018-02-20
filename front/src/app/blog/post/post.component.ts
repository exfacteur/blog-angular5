import { PostService } from './../../services/post.service';
import { Post } from './../../services/model/post';
import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts: Array<Post>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(res => {
      this.posts = res.data;
    });
  }

}
