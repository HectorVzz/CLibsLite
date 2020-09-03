import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nfware-clibs';
  personForm: FormGroup;

  sidenavItems = [
    { label: 'home', path: '/home'},
    { label: 'test', path: '/test'}
  ];

  ngOnInit() {
    this.personForm = new FormGroup({
      'name' : new FormControl('asdasd'),
      'age' : new FormControl('23')
    });
  }

  onSubmit() {
    console.log(this.personForm.value);
  }

}
