import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from '../models/game-settings.model';
import { GameState, selectRest, selectSecond, selectThird, selectWinner } from '../store/skribbl.selector';

@Component({
  selector: 'app-end-of-game',
  templateUrl: './end-of-game.component.html',
  styleUrls: ['./end-of-game.component.scss']
})
export class EndOfGameComponent implements OnInit {

  public first: Observable<Player>;
  public second: Observable<Player>;
  public third: Observable<Player>;
  public restOfPlayers: Observable<Array<Player>>;
  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    this.first = this.store.pipe(select(selectWinner));
    this.second = this.store.pipe(select(selectSecond));
    this.third = this.store.pipe(select(selectThird));
    this.restOfPlayers = this.store.pipe(select(selectRest));
  }

}
