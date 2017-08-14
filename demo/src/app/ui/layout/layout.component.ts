import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ui-layout',
  template: `
    <ui-nav [items]="items"></ui-nav>
    <ui-header></ui-header>
    <div class="animated slideInUp">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      <ui-footer></ui-footer>
    </div>
  `,
})
export class LayoutComponent implements OnInit {
  items = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(d => (this.items = d['headerItems']))
  }
}
