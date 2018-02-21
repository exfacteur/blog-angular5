import {Component, OnInit} from '@angular/core';
import {Post} from '../../services/model/post';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  public newPost: Post = new Post();
  public updatePost: Post = null;
  public postGroup: FormGroup;
  public sending = false;
  public error = false;
  private id: number;

  constructor(private postService: PostService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.postGroup = fb.group({
      'title': [null, Validators.compose([
        Validators.minLength(1)])],
      'content': [null, Validators.compose([
        Validators.minLength(1)])]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.postService.getById(this.id).subscribe(res => {
          this.updatePost = res['data'] as Post;
          this.postGroup.controls['title'].setValue(this.updatePost.title, {emitEvent: false});
        });
      }
    });
  }

  saveNewOrUpdatePost(event) {
    this.error = false;
    this.sending = true;
    if (this.updatePost === null) {
      this.newPost.title = this.postGroup.controls['title'].value;
      this.newPost.content = this.postGroup.controls['content'].value;
      this.postService.add(this.newPost).subscribe(res => {
        this.sending = false;
        this.error = false;
        this.newPost = res.data;
      }, err => {
        this.sending = false;
        this.error = true;
      });
    } else {
      this.updatePost.title = this.postGroup.controls['title'].value;
      this.updatePost.content = this.postGroup.controls['content'].value;
      this.postService.put(this.updatePost).subscribe(res => {
        this.sending = false;
        this.error = false;
        this.updatePost = res.data;
      }, err => {
        this.sending = false;
        this.error = true;
      });
    }
  }
}
