import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerListModule } from '../player-list/player-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PostItModule } from '../post-it/post-it.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerListModule,
    PostItModule,
    BrowserModule,
    FontAwesomeModule,
    DropdownModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
