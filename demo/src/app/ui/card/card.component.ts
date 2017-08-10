import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ui-card',
  template: `
    <div class="ui-card">
      <div class="ui-card-header">
        <div class="ui-card-title">
          <i class="{{icon}}" aria-hidden="true"></i>
          {{title}}
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() title: string;
  @Input() icon: string;

  @Input() set cardTitle(title) {
    switch (title.toLowerCase()) {
      case 'template':
        this.title = `<i class="fa fa-html5" aria-hidden="true"></i> ${title}`;
        break;
      case 'style':
        this.title = `<i class="fa fa-css3" aria-hidden="true"></i> ${title}`;
        break;
      case 'buttons':
        this.title = `<i class="fa fa-share-square-o" aria-hidden="true"></i> ${title}`;
        break;
      case 'link args':
        this.title = `<i class="fa fa-external-link" aria-hidden="true"></i> ${title}`;
        break;
      case 'options':
        this.title = `<i class="fa fa-cog" aria-hidden="true"></i> ${title}`;
        break;
      default:
        this.title = `<i class="fa fa-code" aria-hidden="true"></i> ${title}`;
    }
  }

  @Input() active = false;

}
