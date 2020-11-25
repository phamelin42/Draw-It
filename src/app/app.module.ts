import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store/skribbl.selector';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChooseWordComponent } from './choose-word/choose-word.component';
import { EffectsModule } from '@ngrx/effects';
import { ChooseWordModule } from './choose-word/choose-word.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { DrawingComponent } from './drawing/drawing.component';
import { DrawingModule } from './drawing/drawing.module';
import { PlayerListModule } from './player-list/player-list.module';
import { EndOfGameModule } from './end-of-game/end-of-game.module';
import { EndOfGameComponent } from './end-of-game/end-of-game.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const appRouteList: Routes = [
  {
      path: 'home',
      component: HomeComponent,
      data: {animation: 'isLeft'}
  },
  {
      path: 'choose-word',
      data: { animation: 'centerLeft' },
      component: ChooseWordComponent
  },
  {
      path: 'draw',
      data: { animation: 'centerLeft' },
      component: DrawingComponent
  },
  {
      path: 'end',
      data: { animation: 'centerLeft' },
      component: EndOfGameComponent
  },
  {
      path: '**',
      redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    DrawingModule,
    PlayerListModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ChooseWordModule,
    EndOfGameModule,
    HomeModule,
    RouterModule.forRoot(appRouteList),
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromStore.featureName, fromStore.reducers, { metaReducers: fromStore.metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
