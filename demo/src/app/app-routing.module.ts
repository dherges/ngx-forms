import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: './pages/pages.module#PagesModule' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
