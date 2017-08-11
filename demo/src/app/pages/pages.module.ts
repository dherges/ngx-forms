import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxFormsModule } from '@ngx-plus/ngx-forms'

import { UiModule } from '../ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module'

import { DemoComponent } from './demo/demo.component'
import { InstallationComponent } from './installation/installation.component'
import { UsageComponent } from './usage/usage.component'
import { FieldsComponent } from './fields/fields.component'

@NgModule({
  imports: [
    CommonModule,
    NgxFormsModule.forRoot(),
    UiModule,
    PagesRoutingModule,
  ],
  declarations: [
    DemoComponent,
    InstallationComponent,
    UsageComponent,
    FieldsComponent,
  ],
})
export class PagesModule {}
