import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { GameSettings } from '../models/game-settings.model';
import { gameSettingsReducer } from './reducers/game-reducer';


export const featureName = 'skribbl';

export interface GameState {
    gameSettings: GameSettings,
}

export const reducers: ActionReducerMap<GameState> = {
    gameSettings: gameSettingsReducer,
};


export const metaReducers: MetaReducer<GameState>[] = !environment.production ? [] : [];
export const gameData = createFeatureSelector<GameState>(featureName);

export const selectSettings = createSelector(gameData, (state) => state.gameSettings);
export const selectRoundNumber = createSelector(gameData, (state) => state.gameSettings.numberOfRound);
export const selectActiveWord = createSelector(gameData, (state) => state.gameSettings.selectedWord);
export const selectTime = createSelector(gameData, (state) => state.gameSettings.durationOfRound);
export const selectPlayerList = createSelector(gameData, (state) => state.gameSettings.players);

export const selectActivePlayer = createSelector(gameData, (state) => state.gameSettings.activePlayerId);
export const selectActiveRound = createSelector(gameData, (state) => state.gameSettings.activeRound);
