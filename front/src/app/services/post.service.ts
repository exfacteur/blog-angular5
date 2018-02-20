import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Post } from './model/post';

@Injectable()
export class PostService {
  private baseUrl = '/api/v1';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }
 }
