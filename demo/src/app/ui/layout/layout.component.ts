import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ui-layout',
  template: `
    <ui-nav [items]="items">
      <ribbon class="d-none d-lg-flex"></ribbon>
      <badges-nav class="float-right text-nowrap"></badges-nav>
    </ui-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <ui-footer></ui-footer>
  `,
})
export class LayoutComponent implements OnInit {
  items = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(d => (this.items = d['headerItems']))
  }
}
