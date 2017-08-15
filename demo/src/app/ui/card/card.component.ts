import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-card',
  template: `
    <div class="ui-card">
      <div class="ui-card-header">
        <div class="ui-card-title">
          <i class="{{icon}}" aria-hidden="true"></i>
          {{title}}
        </div>
        <button *ngIf="copy" class="btn btn-sm btn-secondary ml-auto" 
                ngxClipboard [cbContent]="copy" (cbOnSuccess)="copied = true" [class.btn-success]= "copied">
          <i class="fa fa-fw fa-clone"></i>
        </button>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() copy: string = null
  @Input() icon: string
  @Input() title: string

  public copied = false
}
