import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  headers = ['id', 'nombre', 'apellido', 'status', 'rol'];

  testData = [
    { id: 1, name: 'Alberto', surname: 'Placencia', status: 'active', rol: 'developer'},
    { id: 2, name: 'paseo de los sauces 450', surname: 'Salinas', status: 'active', rol: 'developer'},
    { id: 3, name: 'Hector', surname: 'Vazquez', status: 'active', rol: 'developer'},
    { id: 4, name: 'Rafael', surname: 'Quintero', status: 'active', rol: 'developer'},
    { id: 5, name: 'Hannia', surname: 'Lozano', status: 'active', rol: 'developer'},
    { id: 6, name: 'Gerardo', surname: 'Vazquez', status: 'active', rol: 'developer'},
    { id: 7, name: 'Erick', surname: 'Gomez', status: 'active', rol: 'developer'},
    { id: 8, name: 'Alberto', surname: 'Placencia', status: 'active', rol: 'developer'},
    { id: 9, name: 'paseo de los sauces 450', surname: 'Salinas', status: 'active', rol: 'developer'},
    { id: 10, name: 'Hector', surname: 'Vazquez', status: 'active', rol: 'developer'},
    { id: 11, name: 'Rafael', surname: 'Quintero', status: 'active', rol: 'developer'},
    { id: 12, name: 'Hannia', surname: 'Lozano', status: 'active', rol: 'developer'},
    { id: 13, name: 'Gerardo', surname: 'Vazquez', status: 'active', rol: 'developer'},
    { id: 14, name: 'Erick', surname: 'Gomez', status: 'active', rol: 'developer'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
