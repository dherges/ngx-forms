import { Component, Input } from '@angular/core'

@Component({
  selector: 'ngx-form-header',
  template: `
    <i *ngIf="icon" [class]="icon"></i>
    <span *ngIf="!title && item.id">Edit</span>
    <span *ngIf="!title && !item.id">Add</span>
    <span *ngIf="title">{{title}}</span>
  `,
})
export class NgxFormHeaderComponent {

  @Input() item: any = {}
  @Input() title: string = null
  @Input() icon: string = null

}
