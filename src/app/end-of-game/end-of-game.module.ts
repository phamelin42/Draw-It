import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndOfGameComponent } from './end-of-game.component';



@NgModule({
  declarations: [EndOfGameComponent],
  imports: [
    CommonModule
  ],
  exports: [EndOfGameComponent]
})
export class EndOfGameModule { }
