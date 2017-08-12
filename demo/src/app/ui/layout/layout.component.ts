import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ui-layout',
  template: `
    <div class="animated fadeIn container-fluid">
      <ui-nav [items]="items"></ui-nav>
      <ui-header></ui-header>
      <div class="animated slideInUp container">
        <router-outlet></router-outlet>
      </div>
      <ui-footer></ui-footer>
    </div>
  `,
})
export class LayoutComponent implements OnInit {
  items = []

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(d => (this.items = d['headerItems']))
  }
}
