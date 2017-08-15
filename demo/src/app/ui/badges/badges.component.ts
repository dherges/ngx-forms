import { Component } from '@angular/core'

@Component({
  selector: 'badges',
  template: `
    <a *ngFor="let badge of badges" [href]="badge.link">
      <img [src]="badge.img" />
    </a>
  `,
  styles: [`
    a {
      text-decoration: none;
    }
  `],
})
export class BadgesComponent {
  public badges = [
    {
      link: 'https://ngx-plus-slack.now.sh/',
      img: 'https://ngx-plus-slack.now.sh/badge.svg',
    },
    {
      link: 'https://www.npmjs.com/package/@ngx-plus/ngx-forms',
      img:
      'https://img.shields.io/npm/v/@ngx-plus/ngx-forms.svg?maxAge=2592000?style=plastic',
    },
    {
      link: 'https://ngx-plus.github.io/ngx-forms/',
      img: 'https://img.shields.io/badge/demo-online-61B5D9.svg',
    },
    {
      link: 'https://travis-ci.org/ngx-plus/ngx-forms',
      img: 'https://travis-ci.org/ngx-plus/ngx-forms.svg?branch=master',
    },
    {
      link: 'https://coveralls.io/github/ngx-plus/ngx-forms?branch=master',
      img:
      'https://coveralls.io/repos/github/ngx-plus/ngx-forms/badge.svg?branch=master',
    },
    {
      link: '#contributors',
      img: 'https://img.shields.io/badge/contributors-2-orange.svg',
    },
  ]
}
