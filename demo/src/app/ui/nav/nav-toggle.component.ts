import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-nav-toggle',
  template: `
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-label="Toggle navigation"
            [class.collapsed]="collapsed" [class.mt-3]="collapsed" (click)="toggle.emit()">
      <span class="navbar-toggler-icon"></span>
    </button>
  `,
})
export class NavToggleComponent {
  @Input() collapsed
  @Output() toggle = new EventEmitter()
}
