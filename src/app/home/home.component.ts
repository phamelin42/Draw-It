import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { selectRoundNumber, selectTime } from '../store/skribbl.selector';
import { SetPlayer, SetRound, SetTime } from '../store/actions/game-actions';
import { GameState } from '../store/skribbl.selector';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public roundNumber: Array<{label: string, value: any}>;
  public roundTime: Array<{label: string, value: any}>;
  public pName: string = '';
  public selectedRoundNumber: Observable<number>;
  public selectedTime: Observable<number>;
  public hoveredTime;

  public faPlus = faPlus;

  constructor(private store: Store<GameState>) { }

  
  ngOnInit(): void {
    this.roundNumber = [
      {label:'1', value: 1},
      {label:'2', value: 2},
      {label:'3', value: 3},
      {label:'4', value: 4},
      {label:'5', value: 5},
      {label:'6', value: 6},
      {label:'7', value: 7},
      {label:'8', value: 8},
      {label:'9', value: 9},
      {label:'10', value: 10}
    ];
    this.roundTime = [
      {label:'100', value: 100},
      {label:'120', value: 120},
      {label:'140', value: 140},
      {label:'160', value: 160},
      {label:'180', value: 180},
      {label:'200', value: 200},
      {label:'220', value: 220},
      {label:'240', value: 240},
    ];
    this.selectedRoundNumber = this.store.pipe(select(selectRoundNumber));
    this.selectedTime = this.store.pipe(select(selectTime));
    this.hoveredTime = this.selectedTime;
  }

  setRoundNumber(val: number) {
    this.store.dispatch(new SetRound(val));
  }

  setRoundTime(val: number): void {
    this.store.dispatch(new SetTime(val));
  }

  setPlayer(val: string, e?): void {
    this.pName = '';
    if (e) e.preventDefault();
    if (val) {
      this.store.dispatch(new SetPlayer(val));
    }
  }

  overInHourglass(time) {
    this.hoveredTime = time;
  }

  overOutHourglass() {
    this.hoveredTime = this.selectedTime;
  }
}
