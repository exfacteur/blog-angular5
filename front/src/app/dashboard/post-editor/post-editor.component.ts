import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  public sending = false;
  public error = false;

  constructor() { }

  ngOnInit() {
  }

}
