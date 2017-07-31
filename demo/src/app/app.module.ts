import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MdButtonModule } from '@angular/material'
import { SharedModule } from './shared/shared.module'
import { NgxFormsModule, NgxFormsService } from '../../../src'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { InstallationComponent } from './installation/installation.component'
import { SetupComponent } from './setup/setup.component'
import { UsageComponent } from './usage/usage.component'
import { CustomComponent } from './custom/custom.component'
import { IntegrationComponent } from './integration/integration.component'
import { FooterComponent } from './footer/footer.component'
import { NotesComponent } from './notes/notes.component'
import { SingleComponent } from './single/single.component'
import { FieldsComponent } from './fields/fields.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFormsModule.forRoot(),
    HttpModule,
    SharedModule,
    MdButtonModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    InstallationComponent,
    SetupComponent,
    UsageComponent,
    CustomComponent,
    FieldsComponent,
    IntegrationComponent,
    FooterComponent,
    NotesComponent,
    SingleComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
