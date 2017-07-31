import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleComponent implements OnInit {

  fbButton;
  cmpName = '';
  tsCode = ``;
  htmlCode = '';
  cssCode = ``;

  constructor() {
  }

  ngOnInit() {

  }

}
