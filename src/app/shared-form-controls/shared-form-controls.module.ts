import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { CommonModule } from '@angular/common';

import { TextInputComponent } from './text-input/text-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { FileInputComponent } from './file-input/file-input.component';


@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    SelectInputComponent,
    DateInputComponent,
    SubmitButtonComponent,
    FileInputComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    SelectInputComponent,
    DateInputComponent,
    SubmitButtonComponent,
    FileInputComponent
  ]
})
export class SharedFormControlsModule { }
