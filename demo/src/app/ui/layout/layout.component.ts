import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ui-layout',
  template: `
    <ui-nav [items]="items"></ui-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <ui-footer></ui-footer>
  `,
})
export class LayoutComponent {

  items = []

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(d => this.items = d['headerItems'])
  }
}
