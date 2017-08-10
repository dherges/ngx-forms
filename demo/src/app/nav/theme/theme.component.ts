import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'theme',
  template: `
  <div class="btn-group"
       [class.show]="themeDropOpen">
    <button type="button"
            class="btn btn-outline-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            (click)="toggleThemeDrop()">Theme
    </button>
    <div class="dropdown-menu">
      <a *ngFor="let theme of themes"
         class="dropdown-item"
         href="#"
         [class.active]="selectedTheme === theme.name"
         (click)="selectTheme(theme)">{{ theme.name }}
      </a>
    </div>
  </div>
  `,
  styles: [`
    .btn-group {
      position: absolute;
      right: 50px;
      top: -20px;
    }

    .dropdown-menu {
      margin-top: 20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeComponent {

  public selectedTheme = 'Cosmo'
  public themeDropOpen = false
  public themes = [
    { name: 'Cerulean' },
    { name: 'Cosmo' },
    { name: 'Cyborg' },
    { name: 'Darkly' },
    { name: 'Flatly' },
    { name: 'Journal' },
    { name: 'Litera' },
    { name: 'Lumen' },
    { name: 'Lux' },
    { name: 'Materia' },
    { name: 'Minty' },
    { name: 'Pulse' },
    { name: 'Sandstone' },
    { name: 'Simplex' },
    { name: 'Spacelab' },
    { name: 'Superhero' },
    { name: 'United' },
    { name: 'Yeti' },
  ]

  toggleThemeDrop() {
    this.themeDropOpen = !this.themeDropOpen
  }

  selectTheme(theme) {
    this.selectedTheme = theme.name
    this.toggleThemeDrop()
  }

}
