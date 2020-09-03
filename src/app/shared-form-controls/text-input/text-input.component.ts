import { Component, OnInit, forwardRef, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { widthType } from 'src/core/types';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ],
})
export class TextInputComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() width: widthType = 'lg';
  @Input() formControl: FormControl;
  @Input() showError: boolean;
  @Input() errorText: string;

  value: string;
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  @HostBinding('class.w-full') true;
  @HostBinding('class.md:w-3/12') get smallWidth() { return this.width === 'sm'; }
  @HostBinding('class.md:w-6/12') get mediumWidth() { return this.width === 'md'; }
  @HostBinding('class.md:w-full') get largeWidth() { return this.width === 'lg'; }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'width': {
            this.width = change.currentValue;
          }
          case 'showError': {
            this.showError = change.currentValue;
          }
        }
      }
    }
  }

  onInput(value: string) {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
   }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
   }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
