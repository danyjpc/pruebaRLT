import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'content',
    component : ContentComponent
  },
  {
    path : 'content2/:url',
    component : ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
