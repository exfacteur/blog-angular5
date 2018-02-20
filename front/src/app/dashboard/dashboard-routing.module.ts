import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full'},
  { path: '', component: DashboardComponent, children: [
      { path: 'content', component: ContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
