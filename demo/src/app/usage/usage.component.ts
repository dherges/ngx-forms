import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {

  totalShare: number = 0;

  sumCounts(count) {
    this.totalShare += count;
  }

  importCode = `import { NgxFormsModule } from '@ngx-plus/ngx-forms'

@NgModule({
 imports: [
   NgxFormsModule.forRoot()
 ]
})`

  basicCode = ''

  countTemplate = ``;

  countCode = ``;

  countStyle = ``;

}
