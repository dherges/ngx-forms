import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgxFormsService } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'app-root',
  template: `
    <ui-nav [items]="items"></ui-nav>
    <router-outlet></router-outlet>
    <ui-footer></ui-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  items = [
    { name: 'Demo', link: ['/demo'] },
    { name: 'Installation', link: ['/', 'installation'] },
    { name: 'Usage', link: ['/', 'usage'] },
    { name: 'Fields', link: ['/', 'fields'] },
  ]

  constructor(private forms: NgxFormsService) { }

}
