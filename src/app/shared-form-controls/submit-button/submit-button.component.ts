import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { widthType } from 'src/core/types';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  @Input() position: 'left' | 'center' | 'right' = 'left';
  @Input() width: widthType;
  @Input() label = 'submit';

  @HostBinding('class.text-left') get leftPosition(): boolean { return this.position === 'left'}
  @HostBinding('class.text-center') get centerPosition(): boolean { return this.position === 'center'}
  @HostBinding('class.text-right') get rightPosition(): boolean { return this.position === 'right'}

  constructor() { }

  ngOnInit(): void {
  }

}
