import { Component, VERSION } from '@angular/core'

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  public ngVersion = VERSION.full

}
