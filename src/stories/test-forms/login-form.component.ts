import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <app-box-wrapper width="100" padding="1%">
      <form class="w-full" [formGroup]="personForm"  (ngSubmit)="onSubmit()">
        <app-text-input
          label="Ingresa un email"
          formControlName="email"
          width="lg"
          placeholder="Ingresa tu email"
        >
        </app-text-input>
        <div *ngIf="!personForm.get('email').valid && personForm.get('email').touched">
          Email invalido
        </div>
        <app-password-input
          label="Contraseña"
          formControlName="password"
          width="lg"
        >
        </app-password-input>
        <div *ngIf="!personForm.get('password').valid && personForm.get('password').touched">
          Tienes que llenar el campo de contraseña
        </div>
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
export class LoginFormComponent implements OnInit {

  personForm: FormGroup;

  ngOnInit() {
    this.personForm = new FormGroup({
      'email' : new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      'password' : new FormControl('testpassword',Validators.required)
    });
  }

  onSubmit() {
    console.log(this.personForm);
  }
}
