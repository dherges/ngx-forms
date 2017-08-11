import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LayoutComponent } from '../ui/layout/layout.component'

import { DemoComponent } from './demo/demo.component'
import { InstallationComponent } from './installation/installation.component'
import { UsageComponent } from './usage/usage.component'
import { FieldsComponent } from './fields/fields.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      headerItems: [
        { name: 'Demo', link: ['/'] },
        { name: 'Installation', link: ['/', 'installation'] },
        { name: 'Usage', link: ['/', 'usage'] },
        { name: 'Fields', link: ['/', 'fields'] },
      ]
    },
    children: [
      { path: '', component: DemoComponent },
      { path: 'installation', component: InstallationComponent },
      { path: 'usage', component: UsageComponent },
      { path: 'fields', component: FieldsComponent },
    ],
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
