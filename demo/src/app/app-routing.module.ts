import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { DemoComponent, FieldsComponent, InstallationComponent, UsageComponent } from './modules'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { path: 'demo', component: DemoComponent },
      { path: 'installation', component: InstallationComponent },
      { path: 'usage', component: UsageComponent },
      { path: 'fields', component: FieldsComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
