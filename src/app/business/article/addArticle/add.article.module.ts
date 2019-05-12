import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleMaterialModule } from '../../../material-module';
import { AddArticleRoutingModule } from './addArticle-routing.module';
import { AddArticleComponent } from './add.article.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddArticleRoutingModule,
    ExampleMaterialModule,
    CKEditorModule
  ],
  declarations: [
    AddArticleComponent
  ],
  exports: [
  ],
  providers: []
})
export class AddArticleModule { }
