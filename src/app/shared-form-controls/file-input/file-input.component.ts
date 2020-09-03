import { Component, OnInit, forwardRef, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { widthType } from 'src/core/types';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ],
})
export class FileInputComponent implements OnInit, ControlValueAccessor {

  @Input() label = '';
  @Input() placeholder = '';
  @Input() width: widthType = 'lg';
  @Input() formControl: FormControl;
  @Input() showError: boolean;
  @Input() errorText: string;
  @Input() uploader: FileUploader;

  value: string;
  isDisabled: boolean;
  hasBaseDropZoneOver = false;

  onChange = (newValue: any) => {
    console.log('nuevo valor xd:', newValue);
  };
  onTouch = () => { };

  @HostBinding('class.w-full') true;
  @HostBinding('class.md:w-3/12') get smallWidth() { return this.width === 'sm'; }
  @HostBinding('class.md:w-6/12') get mediumWidth() { return this.width === 'md'; }
  @HostBinding('class.md:w-full') get largeWidth() { return this.width === 'lg'; }


  constructor() { }

  ngOnInit(): void {
  }

  fileOverBase(event):  void {
    this.hasBaseDropZoneOver  =  event;
  }

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
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
