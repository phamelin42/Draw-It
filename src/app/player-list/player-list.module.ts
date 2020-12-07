import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { PostItModule } from '../post-it/post-it.module';



@NgModule({
  declarations: [PlayerListComponent],
  imports: [
    CommonModule,
    PostItModule,
  ],
  exports: [PlayerListComponent]
})
export class PlayerListModule { }
