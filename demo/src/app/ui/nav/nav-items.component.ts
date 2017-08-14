import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-nav-items',
  template: `
    <ul class="navbar-nav">
      <li class="nav-item"
          *ngFor="let item of items"
          routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
        <a class="nav-link" [routerLink]="item.link">{{ item.name }}</a>
      </li>
    </ul>
  `,
})
export class NavItemsComponent {
  @Input() items: any[] = []
}
