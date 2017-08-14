/* tslint:disable:no-access-missing-member */
import { Component, OnInit } from '@angular/core'
import { FieldType } from 'ng-formly'

@Component({
  selector: 'ngx-formly-field-wysiwyg',
  template: `
    <ngx-quill-editor [formlyAttributes]="field"
                  [(ngModel)]="model[key]"
                  [theme]="theme"
                  [modules]="toolbar">
    </ngx-quill-editor>
  `,
  styleUrls: ['../../../scss/styles.scss']
})
export class FormlyFieldWysiwygComponent extends FieldType implements OnInit {

  public toolbars = {
    default: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video']                         // link and image, video
      ],
    },
    basic: {
      toolbar: true,
    },
  }

  public toolbar = this.toolbars.basic
  public theme = 'snow'

  ngOnInit() {
    this.toolbar = this.toolbars[this.to['toolbar']] || this.toolbars.default
    this.theme = this.to['theme'] || this.theme
  }


}
