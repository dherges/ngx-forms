import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  template: `
    <ui-nav [items]="items"></ui-nav>
    <router-outlet></router-outlet>
    <ui-footer></ui-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  items = [
    { name: 'Demo', link: ['/demo'] },
    { name: 'Installation', link: ['/', 'installation'] },
    { name: 'Usage', link: ['/', 'usage'] },
    { name: 'Fields', link: ['/', 'fields'] },
  ]

  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll to top on NavigationEnd
    this.router.events.subscribe(e => e instanceof NavigationEnd ? document.body.scrollTop = 0 : 0)
  }

}
