import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'ui-nav',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <div class="row align-items-center w-100">
          <div class="col-6 col-lg-3">
            <ui-nav-brand></ui-nav-brand>
          </div>
          <div class="col">
            <ui-nav-nav [items]="items"></ui-nav-nav>
          </div>
          <div class="col mt-1 d-none d-lg-block">
            <ui-nav-custom></ui-nav-custom>
            <ribbon></ribbon>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
    .navbar {
      background: #f5f5f5;
      font-size: 18px;
      min-height: 80px;
    }
  `,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  public collapsed = false
  public logo = 'assets/img/ngx-plus-light.svg'

  @Input() items: any[]

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.subscribe(
    //   e => (e instanceof NavigationEnd ? (this.collapsed = false) : '')
    // )
  }
}
