import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NgxFormsService } from '@ngx-plus/ngx-forms'

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

  basicCode = '<ngx-form></ngx-form>'

  icon = 'fa fa-magic'

  item = {}

  formConfig = {
    fields: this.getFormFields(),
    buttons: [
      { label: 'Save', type: 'submit', classNames: 'btn-primary', click: { type: 'submit' } },
      { label: 'Cancel', type: 'button', classNames: 'btn-secondary', click: { type: 'cancel' } },
    ]
  }

  constructor(
    private forms: NgxFormsService,
  ) {

  }

  getFormFields() {
    const fields = [
      this.forms.input('firstName', {
        label: 'First name',
        placeholder: 'First name',
      }),
      this.forms.input('lastName', {
        label: 'Last name',
        placeholder: 'Last name',
      }),
      this.forms.email('email', {
        label: 'Email address',
        placeholder: 'Email address',
      }),
    ]
    return fields
  }

  public getFormConfig() {
    return {
    }
  }

}
