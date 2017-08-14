import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NgxFormsModule } from '@ngx-plus/ngx-forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    NgxFormsModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
