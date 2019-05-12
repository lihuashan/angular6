import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleMaterialModule } from '../../material-module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';



@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ExampleMaterialModule
  ],
  declarations: [
    ArticleComponent
  ],
  exports: [
  ],
  providers: []
})
export class ArticleModule { }
