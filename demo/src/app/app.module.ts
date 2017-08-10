import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgxFormsModule } from '@ngx-plus/ngx-forms'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { UiModule } from './ui/ui.module';

// modules
import { DemoComponent } from './modules/demo/demo.component'
import { FieldsComponent } from './modules/fields/fields.component'
import { InstallationComponent } from './modules/installation/installation.component'
import { SetupComponent } from './modules/setup/setup.component'
import { UsageComponent } from './modules/usage/usage.component'

const modules = [
  DemoComponent,
  FieldsComponent,
  InstallationComponent,
  SetupComponent,
  UsageComponent,
]


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormsModule.forRoot(),
    HttpModule,

    UiModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ...modules,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
