import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', loadChildren: '../business/home/home.module#HomeModule' },
      { path: 'user', loadChildren: '../business/user/user.module#UserModule' },
      { path: 'personalInfo', loadChildren: '../business/user/personalInfo/personalInfo.module#PersonalInfoModule' },
      { path: 'changePassword', loadChildren: '../business/user/changePassword/changePassword.module#ChangePasswordModule' },
      { path: 'article', loadChildren: '../business/article/article.module#ArticleModule' },
      { path: 'addArticle', loadChildren: '../business/article/addArticle/add.article.module#AddArticleModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
