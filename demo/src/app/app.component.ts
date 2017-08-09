import {Component, ChangeDetectionStrategy} from '@angular/core'
import {NgxFormsService} from '@ngx-plus/ngx-forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private forms: NgxFormsService) { }

}
