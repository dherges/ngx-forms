import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

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
            <div class="collapse navbar-collapse" [class.show]="collapsed" id="navbarTogglerDemo01">
              <div [class.container]="collapsed">
                <ul class="navbar-nav">
                  <li class="nav-item"
                      *ngFor="let item of items"
                      [routerLinkActiveOptions]="{ exact: true }"
                      routerLinkActive="active">
                    <a class="nav-link" [routerLink]="item.link">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            class="navbar-toggler mt-4" type="button"
            data-toggle="collapse" data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
            (click)="collapsed = !collapsed">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="col-2 align-self-center">
            <div class="github-buttons hidden-md-down">
              <iframe allowtransparency="true"
                      scrolling="no"
                      frameborder="0"
                      src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fngx-plus%2Fngx-forms&amp;aria-label=Star%20ngx-plus%2Fngx-forms%20on%20GitHub&amp;data-text=Star&amp;data-size=large&amp;data-show-count=true"
                      style="width: 120px; height: 30px; line-height: 30px;">
              </iframe>
              <ribbon></ribbon>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  public collapsed = false
  public logo = 'assets/img/ngx-plus-light.svg'

  @Input() items: any[]

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(e => e instanceof NavigationEnd ? this.collapsed = false : '')
  }

}
