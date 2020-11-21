import { Action } from '@ngrx/store';
import { Player } from 'src/app/models/game-settings.model';

export enum GameSettingsActionsTypes {
    SetRound = '[Game] Set Round',
    SetTime = '[Game] Set Time',
    SetPlayer = '[Game] Set Player',
    SetActivePlayer = '[Game] Set Active Player',
    SelectWord = '[Game] Select Word',
    GivePoint = '[Game] Give Point',
    SetActiveRound = '[Game] Set Active Round',
}

export class SetRound implements Action {
    readonly type = GameSettingsActionsTypes.SetRound;
    constructor(public payload: number) { }
}
export class SetTime implements Action {
    readonly type = GameSettingsActionsTypes.SetTime;
    constructor(public payload: number) { }
}
export class SetPlayer implements Action {
    readonly type = GameSettingsActionsTypes.SetPlayer;
    constructor(public payload: string) { }
}
export class SetActivePlayer implements Action {
    readonly type = GameSettingsActionsTypes.SetActivePlayer;
    constructor() {}
}
export class SelectWord implements Action {
    readonly type = GameSettingsActionsTypes.SelectWord;
    constructor(public payload: string) {}
}
export class GivePoint implements Action {
    readonly type = GameSettingsActionsTypes.GivePoint;
    constructor(public payload: number) {}
}
export class SetActiveRound implements Action {
    readonly type = GameSettingsActionsTypes.SetActiveRound;
    constructor(public payload: number) {}
}
export type GameSettingsActions = SetRound | SetTime | SetPlayer | SetActivePlayer | SelectWord | GivePoint | SetActiveRound;
