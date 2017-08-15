import { Component, Input } from '@angular/core'

@Component({
  selector: 'field-types',
  template: `
    <section>
      <h2>Field Types</h2>
      <div *ngFor="let field of fields">
        <h3 class="my-4">{{ field.name }}</h3>
        <div class="row">
          <div class="col-md-6">
            <ui-card *ngIf="field.code.code"
                     icon="fa fa-code"
                     title="Code"
                     [copy]="field.code.code">
              <highlight lang="ts"
                         [code]="field.code.code">
              </highlight>
            </ui-card>
            <ui-card *ngIf="field.code.template"
                     icon="fa fa-html5"
                     title="Template"
                     [copy]="field.code.template">
              <highlight lang="html"
                         [code]="field.code.template">
              </highlight>
            </ui-card>
          </div>
          <div class="col-md-6">
            <ui-card icon="fa fa-chevron-right" title="Output">
              <div class="ui-card-block">
                <ngx-form-fields [fields]="field.formConfig.fields"></ngx-form-fields>
              </div>
            </ui-card>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FieldTypesComponent {
  @Input() fields
  item = {}
}
