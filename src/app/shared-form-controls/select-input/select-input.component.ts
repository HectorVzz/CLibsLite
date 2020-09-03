import { Component, OnInit, Input, forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { widthType } from 'src/core/types';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true
    }
  ]
})
export class SelectInputComponent implements OnInit, ControlValueAccessor {

  @Input() data: []
  @Input() width: widthType = 'lg';
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() formControl: FormControl;
  @Input() showError: boolean;
  @Input() errorText: string;

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
