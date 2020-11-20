import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseWordComponent } from './choose-word.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ChooseWordComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [ChooseWordComponent]
})
export class ChooseWordModule { }
