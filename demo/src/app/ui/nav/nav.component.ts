import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'ui-nav',
  template: `
    <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col">
            <ul class="navbar-nav">
              <li class="nav-item"
                  *ngFor="let item of items"
                  [routerLinkActiveOptions]="{ exact: true }"
                  routerLinkActive="active">
                <a class="nav-link" [routerLink]="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md text-center">
            <a class="navbar-brand" href="#">@ngx-plus/ngx-forms</a>
          </div>
          <div class="col">
            <ribbon></ribbon>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  public themeDropOpen = false

  @Input() items: any[]
  @Input() themes: any[]

  toggleThemeDrop() {
    this.themeDropOpen = !this.themeDropOpen
  }

}
