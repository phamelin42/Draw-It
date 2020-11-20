import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingComponent } from './drawing.component';
import { PlayerListModule } from '../player-list/player-list.module';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DrawingComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PlayerListModule,
    FontAwesomeModule,
    OverlayPanelModule
  ],
  exports: [DrawingComponent]
})
export class DrawingModule { }
