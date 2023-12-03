import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickAwayDirective } from './click-away.directive';



@NgModule({
  declarations: [
    ClickAwayDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClickAwayDirective,
  ]
})
export class DirectivasModule { }
