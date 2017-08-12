import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core'

@Component({
  selector: 'ui-nav-brand',
  template: `
    <a class="navbar-brand" href="#">
      <div class="animated fadeIn">
        <img class="nav-logo"
             [src]="logo" /> {{ brand }}
      </div>
    </a>
  `,
  styles: [
    `
    .nav-logo {
      height: 60px;
    }

    .navbar-brand {
      font-size: 24px;
    }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBrandComponent implements OnInit {
  @Input() logo = 'assets/img/ngx-plus-light.svg'
  @Input() brand = 'ngx-forms'

  constructor() {}

  ngOnInit() {}
}
