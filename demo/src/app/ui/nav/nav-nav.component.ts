import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'ui-nav-nav',
  template: `
    <button class="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-label="Toggle navigation"
            [class.collapsed]="collapsed"
            [class.mt-3]="open"
            (click)="action.emit({ type: 'ToggleNav' })">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse"
         id="navbarTogglerDemo02"
         [class.show]="open">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li *ngFor="let item of items"
           class="nav-item"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }">
          <a class="nav-link"
             [routerLink]="item.link">{{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavNavComponent implements OnInit {
  @Input() collapsed = true
  @Input() items: any[] = []
  @Input() open = false
  @Output() action = new EventEmitter()


  constructor(private router: Router) { }

  ngOnInit() {

  }
}
