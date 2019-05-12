import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';


const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    /*children: [
      {
        path: 'editUser',
        loadChildren: './editUser/edit.user.module#EditUserModule'
      }
    ]*/
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
