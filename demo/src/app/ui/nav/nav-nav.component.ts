import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'ui-nav-nav',
  template: `
    <button class="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle Navigation"
            [class.collapsed]="collapsed"
            (click)="collapsed = !collapsed">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"
         id="navbarSupportedContent"
         [class.show]="!collapsed">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"
            *ngFor="let item of items"
            [routerLinkActiveOptions]="{ exact: true }"
            routerLinkActive="active">
          <a class="nav-link" [routerLink]="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `

  `,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavNavComponent implements OnInit {
  public collapsed = true

  @Input() items: any[]

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(
      e => (e instanceof NavigationEnd ? (this.collapsed = true) : '')
    )
  }
}
