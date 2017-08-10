import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'demo-nav',
  template: `
    <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col">
            <button class="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                 id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li *ngFor="let item of items"
                    class="nav-item"
                    [routerLink]="item.link"
                    [routerLinkActiveOptions]="{ exact: true }"
                    routerLinkActive="active">
                  <a class="nav-link">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col text-center">
            <a class="navbar-brand" href="#">@ngx-plus/ngx-forms</a>
          </div>
          <div class="col">
            <theme></theme>
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
