import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GameState, selectActiveWord, selectRoundNumber, selectTime } from '../store/skribbl.selector';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit, OnDestroy {

  public wordObs: Observable<string>;
  public wordSubscription: Subscription;
  public word: string;
  public timeLeft: number;
  public timeSubscription: Subscription;
  public roundNumber: Observable<number>;
  public roundRestart: number;
  public winner: boolean;
  public originalTime: number;
  public clues: Array<number> = [];
  public timeLeftInterval: any;
  public restartInterval: any;
  public faQuestion = faQuestion;
  constructor(private store: Store<GameState>, private router: Router) { }

  ngOnInit(): void {
    this.roundRestart = 5;
    this.winner = false;
    this.wordObs = this.store.pipe(select(selectActiveWord))
    this.wordSubscription = this.wordObs.subscribe(x => this.word = x);
    this.timeSubscription = this.store.pipe(select(selectTime)).subscribe(x => {
      this.timeLeft = x;
      this.originalTime = x;
    });
    this.roundNumber = this.store.pipe(select(selectRoundNumber));
    this.timeLeftInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        if ((this.timeLeft % 40 === 0 || this.timeLeft === 20 || this.timeLeft === 10 || this.timeLeft === 5) && this.originalTime !== this.timeLeft) {
          this.clues.push(Math.floor(Math.random() * Math.floor(this.word.length)));
        }
      }
    }, 1000)
    this.restartInterval = setInterval(() => {
      if (this.winner === true || this.timeLeft === 0) {
        if (this.roundRestart > 0) {
          this.roundRestart--;
        } else {
          // this.store.dispatch(new SetActivePlayer());
          this.router.navigate(['/choose-word'])
        }
      }
    }, 1000)
  }

  chooseWinner() {
      if (!this.winner) {
        this.winner = true;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.restartInterval);
    clearInterval(this.timeLeftInterval);
    this.roundRestart = 5;
    this.timeSubscription.unsubscribe();
    this.wordSubscription.unsubscribe();
  }


}
