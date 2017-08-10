import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FieldsComponent } from './fields/fields.component'
import { InstallationComponent } from './installation/installation.component'
import { UsageComponent } from './usage/usage.component'
import { DemoComponent } from './demo/demo.component'

const routes: Routes = [

  { path: '', component: DemoComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'usage', component: UsageComponent },
  { path: 'fields', component: FieldsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
