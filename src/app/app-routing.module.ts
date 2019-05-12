import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'app',
    loadChildren: './main/main.module#MainModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
