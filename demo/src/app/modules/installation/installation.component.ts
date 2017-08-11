import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallationComponent {
  installCode = '$ npm install @ngx-plus/ngx-forms --save';

  importCode = `import { NgxFormsModule } from '@ngx-plus/ngx-forms'
@NgModule({
  imports: [
    NgxFormsModule.forRoot()
  ]
})`

}
