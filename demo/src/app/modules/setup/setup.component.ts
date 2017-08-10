import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupComponent {

  importCode = `import { NgxFormsModule } from '@ngx-plus/ngx-forms'

@NgModule({
  imports: [
    NgxFormsModule.forRoot()
  ]
})`

}
