import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
  selector: 'app-register-form',
  template: `
    <app-box-wrapper width="100" padding="2%">
      <form class="w-full flex flex-wrap " [formGroup]="personForm"  (ngSubmit)="onSubmit()">
        <app-text-input
          label="Ingresa Nombre(s)"
          formControlName="name"
          placeholder="Nombre"
          width="md"
          [showError]="!personForm.get('name').valid && personForm.get('name').touched"
          errorText="Debes llenar la casilla de nombre"
        >
        </app-text-input>
        <app-text-input
          width="md"
          label="Ingresa tus apellidos"
          formControlName="surname"
          placeholder="Apellido paterno y materno"
          [showError]="!personForm.get('surname').valid && personForm.get('surname').touched"
          errorText="Debes llenar la casilla de apellido"
        >
        </app-text-input>
        <app-select-input
          label="Selecciona tu genero"
          formControlName="gender"
          placeholder="Selecciona uno"
          width="md"
          [showError]="!personForm.get('gender').valid && personForm.get('gender').touched"
          errorText="Selecciona un genero"
          [data]="['Hombre','Mujer']">
        </app-select-input>
        <app-date-input
          label="Fecha de nacimiento"
          formControlName="bornDate"
          width="md"
          [showError]="!personForm.get('bornDate').valid && personForm.get('bornDate').touched"
          errorText="Tienes que llenar el campo de fecha de nacimiento"
        >
        </app-date-input>
        <app-text-input
          label="Ingresa tus correo electronico"
          formControlName="email"
          placeholder="test@hotmail.com"
          width="lg"
          [showError]="!personForm.get('email').valid && personForm.get('email').touched"
          errorText="Email invalido"
        >
        </app-text-input>
        <app-password-input
          label="Contraseña"
          formControlName="password"
          width="md"
          [showError]="!personForm.get('password').valid && personForm.get('password').touched"
          errorText="Tienes que llenar el campo de contraseña"
        >
        </app-password-input>
        <app-password-input
          label="Contraseña"
          formControlName="password"
          width="md"
        >
        </app-password-input>
        <app-file-input label="Sube una imagen tuya" [uploader]="uploader">
        </app-file-input>
        <br/>
        <app-submit-button
          label="Enviar formulario"
          width="sm"
          position="right"
        >
        </app-submit-button>
      </form>
    </app-box-wrapper>
  `,
})
export class RegisterFormComponent implements OnInit {

  personForm: FormGroup;
  uploader: FileUploader = new FileUploader({})

  ngOnInit(): void {
    this.personForm = new FormGroup({
      'name' : new FormControl('',[
        Validators.required
      ]),
      'gender' : new FormControl('',[
        Validators.required
      ]),
      'surname' : new FormControl('',[
        Validators.required
      ]),
      'bornDate' : new FormControl('',[
        Validators.required
      ]),
      'email' :  new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      'password' : new FormControl('testpassword',
      Validators.required)
    });
  }

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  onSubmit(): void {
    this.personForm.markAllAsTouched();
    console.log(this.getFiles())
    console.log(this.personForm);
  }
}
