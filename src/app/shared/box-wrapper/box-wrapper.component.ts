import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-box-wrapper',
  templateUrl: './box-wrapper.component.html',
  styleUrls: ['./box-wrapper.component.scss']
})
export class BoxWrapperComponent implements OnInit, OnChanges {

  @Input() width = '100%';
  @Input() height: string;
  @Input() margin: string;
  @Input() marginTop: string;
  @Input() marginLeft: string;
  @Input() marginRight: string;
  @Input() marginBottom: string;
  @Input() padding: string;
  @Input() paddingTop = '0';
  @Input() paddingBottom = '0';
  @Input() paddingLeft = '0';
  @Input() paddingRight = '0';


  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'width': {
            this.width = `${change.currentValue}%`;
            break;
          }
          case 'height': {
            this.height = `${change.currentValue}%`;
            break;
          }
          case 'padding': {
            this.paddingTop = `${change.currentValue}`;
            this.paddingRight = `${change.currentValue}`;
            this.paddingBottom = `${change.currentValue}`;
            this.paddingLeft = `${change.currentValue}`;
            break;
          }
          case 'margin': {
            this.marginTop = `${change.currentValue}`;
            this.marginRight = `${change.currentValue}`;
            this.marginBottom = `${change.currentValue}`;
            this.marginLeft = `${change.currentValue}`;
            break;
          }
        }
      }
    }
  }

}
