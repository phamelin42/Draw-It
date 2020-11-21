import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from '../models/game-settings.model';
import { GivePoint, SetActivePlayer } from '../store/actions/game-actions';
import { GameState, selectActivePlayer, selectActiveRound, selectActiveWord, selectPlayerList, selectRoundNumber } from '../store/skribbl.selector';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnDestroy {

  public playerList: Observable<Array<Player>>;
  public activePlayer: Observable<number>;
  public restartInterval: any;
  public roundRestart: number;
  public winner: boolean;
  public word: Observable<string>;
  public actualRound: Observable<number>;
  public totalRound: Observable<number>;
  constructor(private store: Store<GameState>, public router: Router) { }

  ngOnInit(): void {
    this.roundRestart = 5;
    this.winner = false;
    this.word = this.store.pipe(select(selectActiveWord));
    this.activePlayer = this.store.pipe(select(selectActivePlayer));
    this.totalRound = this.store.pipe(select(selectRoundNumber));
    this.actualRound = this.store.pipe(select(selectActiveRound));
    this.playerList = this.store.pipe(select(selectPlayerList));
    this.restartInterval = setInterval(() => {
      if (this.winner === true) {
        if (this.roundRestart > 0) {
          this.roundRestart--;
        } else {
          this.winner = false;
          this.roundRestart = 5;
          this.store.dispatch(new SetActivePlayer());
          this.router.navigate(['/choose-word']);
        }
      }
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.restartInterval);
  }
  givePoint(player: Player) {
    if (this.router.url === '/draw') {
      this.winner = true;
      this.store.dispatch(new GivePoint(player.id));
    }
  }

}
