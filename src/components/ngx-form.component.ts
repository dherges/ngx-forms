import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { NgxFormConfig } from './ngx-form.interfaces';

@Component({
  selector: 'ngx-form',
  template: `
    <form class="card" novalidate [formGroup]="form">
      <ngx-form-header class="card-header"
                       *ngIf="config.icon || config.title"
                       [icon]="config.icon" [title]="config.title" [item]="item">
      </ngx-form-header>
      <ngx-form-fields class="card-body"
                       *ngIf="config.fields"
                       [fields]="config.fields" [form]="form" [item]="item" (action)="handleAction($event)">
      </ngx-form-fields>
      <ngx-form-buttons class="card-footer"
                        *ngIf="config.buttons && config.buttons.length"
                        [buttons]="config.buttons" [item]="item" (action)="handleAction($event)">
      </ngx-form-buttons>
    </form>
  `,
})
export class NgxFormComponent {

  @Input() form: FormGroup = new FormGroup({})
  @Input() config: NgxFormConfig
  @Input() item = {}
  @Output() action: EventEmitter<any> = new EventEmitter()

  handleAction($event) {
    this.action.emit($event)
  }

}
