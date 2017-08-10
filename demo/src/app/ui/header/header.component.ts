import {Component, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  logo = 'assets/img/ngx-plus-light.svg'
  title = 'ngx-forms'
  description = 'Advanced Angular Form Development'
}
