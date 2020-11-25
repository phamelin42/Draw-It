import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItComponent } from './post-it.component';



@NgModule({
  declarations: [PostItComponent],
  imports: [
    CommonModule,
  ],
  exports: [PostItComponent]
})
export class PostItModule { }
