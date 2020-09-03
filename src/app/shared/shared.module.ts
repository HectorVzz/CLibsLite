import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BoxWrapperComponent } from './box-wrapper/box-wrapper.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { SortArrayPipe } from './pipes/sortArray.pipe';


@NgModule({
  declarations: [BoxWrapperComponent, SidenavComponent, SidenavItemComponent, SortArrayPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BoxWrapperComponent,
    SidenavComponent,
    SidenavItemComponent,
  ]
})
export class SharedModule { }
