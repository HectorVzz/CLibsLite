import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {

  @Input() label: string;
  @Input() path: string;
  @Input() activeColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
