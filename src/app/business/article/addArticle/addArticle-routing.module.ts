import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add.article.component';

const addArticleRoutes: Routes = [
  {
    path: '', component: AddArticleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(addArticleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddArticleRoutingModule { }
