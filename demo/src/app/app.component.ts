import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  template: `
    <ui-nav [items]="items"></ui-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <ui-footer></ui-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  items = [
    { name: 'Demo', link: ['/'] },
    { name: 'Installation', link: ['/', 'installation'] },
    { name: 'Usage', link: ['/', 'usage'] },
    { name: 'Fields', link: ['/', 'fields'] },
  ]

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(e => e instanceof NavigationEnd ? document.body.scrollTop = 0 : 0)
  }

}
