import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedFormControlsModule } from '../../app/shared-form-controls/shared-form-controls.module';
import { LoginFormComponent } from './login-form.component';
import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../app/shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    SharedFormControlsModule,
    ReactiveFormsModule,
    SharedModule,
    FileUploadModule
  ],
  providers: [],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class TestFormsModule { }
