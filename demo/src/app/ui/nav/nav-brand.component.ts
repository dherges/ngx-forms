import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-nav-brand',
  template: `
    <a class="navbar-brand" [routerLink]="link">{{brand}}</a>
  `,
})
export class NavBrandComponent {
  @Input() link = '/'
  @Input() brand = ''
}
