import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { BadgesComponent } from './badges/badges.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';
import { HighlightComponent } from './highlight/component/highlight.component';
import { HighlightDirective } from './highlight/directive/highlight.directive';
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { NavComponent } from './nav/nav.component'
import { CardComponent } from './card/card.component'

const ui = [
  FooterComponent,
  HeaderComponent,
  NavComponent,
  BadgesComponent,
  RibbonComponent,
  HighlightComponent,
  TabsComponent,
  TabComponent,
  SanitizerPipe,
  HighlightDirective,
  CardComponent,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...ui,
  ],
  exports: [
    ...ui,
  ],
})
export class UiModule {
}
