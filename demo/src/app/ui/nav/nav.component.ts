import { Component, Input, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'ui-nav',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <ui-nav-brand
          [brand]="brand"></ui-nav-brand>
        <ui-nav-toggle
          [collapsed]="!collapsed" (toggle)="collapsed = !collapsed"></ui-nav-toggle>
        <div class="collapse navbar-collapse" id="navbarText" [class.show]="!collapsed">
          <ui-nav-items [items]="items"></ui-nav-items>
        </div>
        <ng-content></ng-content>
      </div>
    </nav>
  `,
})
export class NavComponent implements OnInit {
  @Input() items: any[]
  @Input() brand = 'ngx-forms'

  public collapsed = false

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      e => (e instanceof NavigationEnd ? (this.collapsed = true) : '')
    )
  }

}
