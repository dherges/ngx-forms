import { Component, ChangeDetectionStrategy } from '@angular/core'

import { CopierService } from '../../services/copier.service'

@Component({
  selector: 'installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallationComponent {
  installCode = 'npm install @ngx-plus/ngx-forms --save'

  importCode = `import { NgxFormsModule } from '@ngx-plus/ngx-forms'

@NgModule({
  imports: [
    NgxFormsModule.forRoot()
  ]
})`

  constructor(
    private copier: CopierService,
  ) { }

  handleAction(event) {
    switch (event.type) {
      case 'CopyCode': {
        return this.copier.copyText(event.payload)
      }
      default: {
        return console.log('$event', event)
      }
    }
  }
}
