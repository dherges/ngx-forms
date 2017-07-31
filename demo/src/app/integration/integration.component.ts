import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrationComponent {

  directiveLayout = ``;

  imageSrc = '';

  pinHtml = ``;

  pinCss = ``;
}
