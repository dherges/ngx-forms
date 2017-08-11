import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-root',
  template: `

    <router-outlet></router-outlet>
    <!--<ui-layout></ui-layout>-->
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(() => document.body.scrollTop = 0)
  }

}
