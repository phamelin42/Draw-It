import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GameState, selectActivePlayer } from '../store/skribbl.selector';
import WordListJson from '../../assets/word_list.json'
import { Router } from '@angular/router';
import { SelectWord } from '../store/actions/game-actions';
import { Player } from '../models/game-settings.model';

@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.scss']
})
export class ChooseWordComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public wordList: Array<string> = [];
  public wordSelectInterval: any;
  public activePlayer: Observable<Player>;
  public pickTimeLeft: number;
  constructor(private store: Store<GameState>, private router: Router) { }


  ngOnInit(): void {
    this.pickTimeLeft = 25;
    while (this.wordList.length < 3) {
      const random = Math.floor(Math.random() * Math.floor(WordListJson.length));
      if (!this.wordList.includes(WordListJson[random])) {
        this.wordList.push(WordListJson[random]);
      }
    }
    this.wordSelectInterval = setInterval(() => {
      if (this.pickTimeLeft === 0) {
        this.store.dispatch(new SelectWord(this.wordList[Math.floor(Math.random() * Math.floor(3))]));
        this.router.navigate(['/draw']);
      } else {
        this.pickTimeLeft--;
      }}, 1000);
      this.activePlayer = this.store.pipe(select(selectActivePlayer));
      this.activePlayer.subscribe(x => console.log(x));
  }

  chooseWord(word) {
    this.store.dispatch(new SelectWord(word));
    this.router.navigate(['/draw']);
  }

  ngOnDestroy(): void {
    clearInterval(this.wordSelectInterval);
  }
}
