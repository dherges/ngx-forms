import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'ui-nav',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded fixed-top">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col text-left">
            <a class="navbar-brand" href="#">
              <div class="animated fadeIn">
                <img class="ngx-plus-logo"
                     [src]="logo" />&nbsp; @ngx-plus/ngx-forms
              </div>
            </a>
          </div>
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
          <div class="col-2 align-self-center">
            <div class="github-buttons hidden-md-down">
              <iframe allowtransparency="true"
                      scrolling="no"
                      frameborder="0"
                      src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fngx-plus%2Fngx-forms&amp;aria-label=Star%20ngx-plus%2Fngx-forms%20on%20GitHub&amp;data-text=Star&amp;data-size=large&amp;data-show-count=true"
                      style="width: 120px; height: 30px; line-height: 30px;">
              </iframe>
            </div>
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
  public logo = 'assets/img/ngx-plus-light.svg'

  @Input() items: any[]
  @Input() themes: any[]

  toggleThemeDrop() {
    this.themeDropOpen = !this.themeDropOpen
  }

}
