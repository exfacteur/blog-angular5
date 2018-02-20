import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../services/model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public currentPost: Post = null;
  public posts: Array<Post> = new Array<Post>();

  constructor(public postService: PostService, private router: Router) {
  }

  onClick(post: Post) {
    console.log('plop');
    this.currentPost = post;
  }

  ngOnInit() {
    this.postService.getAll().subscribe(res => {
      this.posts = res.data || [];
    });

    if (this.posts.length > 0) {
      this.currentPost = this.posts.shift();
    }
  }
}
