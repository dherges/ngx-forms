import { Component, OnInit, ChangeDetectionStrategy, VERSION } from '@angular/core'

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  public ngVersion: string

  constructor() { }

  ngOnInit() {
    this.ngVersion = VERSION.full
  }

}
