import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ClipboardModule } from 'ngx-clipboard'

import { BadgesComponent } from './badges/badges.component'
import { BadgesNavComponent } from './badges/badges-nav.component'
import { RibbonComponent } from './ribbon/ribbon.component'
import { SanitizerPipe } from './sanitizer/sanitizer.pipe'
import { HighlightComponent } from './highlight/component/highlight.component'
import { HighlightDirective } from './highlight/directive/highlight.directive'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { NavComponent } from './nav/nav.component'
import { NavBrandComponent } from './nav/nav-brand.component'
import { NavItemsComponent } from './nav/nav-items.component'
import { NavToggleComponent } from './nav/nav-toggle.component';
import { CardComponent } from './card/card.component'
import { LayoutComponent } from './layout/layout.component'

const ui = [
  FooterComponent,
  HeaderComponent,
  NavComponent,
  NavBrandComponent,
  NavItemsComponent,
  NavToggleComponent,
  BadgesComponent,
  BadgesNavComponent,
  RibbonComponent,
  HighlightComponent,
  SanitizerPipe,
  HighlightDirective,
  CardComponent,
  LayoutComponent,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClipboardModule,
],
  declarations: [...ui],
  exports: [
    // CommonModule,
    ...ui,
  ],
})
export class UiModule {}
