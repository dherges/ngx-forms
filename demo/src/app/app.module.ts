import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MdButtonModule } from '@angular/material'
import { NgxFormsModule } from '@ngx-plus/ngx-forms'

import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component'
// modules
import { DemoComponent } from './modules/demo/demo.component'
import { FieldsComponent } from './modules/fields/fields.component'
import { InstallationComponent } from './modules/installation/installation.component'
import { NotesComponent } from './modules/notes/notes.component'
import { SetupComponent } from './modules/setup/setup.component'
import { UsageComponent } from './modules/usage/usage.component'
// ui
import { FooterComponent } from './ui/footer/footer.component'
import { HeaderComponent } from './ui/header/header.component'
import { NavComponent } from './ui/nav/nav.component'
import { ThemeComponent } from './ui/theme/theme.component'

import { AppRoutingModule } from './app-routing.module'

const modules = [
  DemoComponent,
  FieldsComponent,
  InstallationComponent,
  NotesComponent,
  SetupComponent,
  UsageComponent,
]

const ui = [
  FooterComponent,
  HeaderComponent,
  NavComponent,
  ThemeComponent,
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormsModule.forRoot(),
    HttpModule,
    SharedModule,
    MdButtonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ...modules,
    ...ui,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
