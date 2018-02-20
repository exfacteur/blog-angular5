import { PostService } from './services/post.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    HttpClient,
    PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
