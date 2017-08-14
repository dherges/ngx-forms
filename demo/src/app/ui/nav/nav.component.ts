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
      <div class="w-100" [class.container]="!open">
        <ui-nav-brand></ui-nav-brand>
        <ui-nav-nav [items]="items"
                    [collapsed]="collapsed"
                    [open]="open"
                    (action)="handleAction($event)">
        </ui-nav-nav>
        <div class="d-none d-lg-flex">
          <ui-nav-custom></ui-nav-custom>
          <ribbon></ribbon>
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
  public open = false

  @Input() items: any[]

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      e => (e instanceof NavigationEnd ? (this.open = false) : '')
    )
  }

  handleAction(event) {
    switch (event.type) {
      case 'ToggleNav': {
        this.collapsed = true
        return this.open = !this.open
      }
      default: {
        return console.log('$event', event)
      }
    }
  }
}
