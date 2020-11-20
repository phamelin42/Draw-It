import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from '../models/game-settings.model';
import { GivePoint } from '../store/actions/game-actions';
import { GameState, selectActivePlayer, selectPlayerList } from '../store/skribbl.selector';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  public playerList: Observable<Array<Player>>;
  public activePlayer: Observable<number>;
  constructor(private store: Store<GameState>) { }

  ngOnInit(): void {
    this.activePlayer = this.store.pipe(select(selectActivePlayer));
    this.playerList = this.store.pipe(select(selectPlayerList));
  }

  givePoint(player: Player) {
    this.store.dispatch(new GivePoint(player.id));
  }

}
