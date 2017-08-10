import {Component, ChangeDetectionStrategy} from '@angular/core'
import {NgxFormsService} from '@ngx-plus/ngx-forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  items = [
    { name: 'Demo', link: ['/']},
    { name: 'Installation', link: ['/', 'installation']},
    { name: 'Usage', link: ['/', 'usage']},
    { name: 'Fields', link: ['/', 'fields']},
    // { name: 'Usage', link: ['/', 'usage']},
  ]

  constructor(private forms: NgxFormsService) { }

}
