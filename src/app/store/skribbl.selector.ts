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

export const selectActivePlayerId = createSelector(gameData, (state) => state.gameSettings.activePlayerId);
export const selectActivePlayer = createSelector(gameData, (state) => state.gameSettings.players.find(player => player.id === state.gameSettings.activePlayerId));
export const selectActiveRound = createSelector(gameData, (state) => state.gameSettings.activeRound);

export const selectOrderedListByScore = createSelector(selectPlayerList, (players) => {
    return players.sort((a, b) => (a.score > b.score) ? 1 : (a.score === b.score) ? ((a.score > b.score) ? 1 : -1) : -1 )
});

export const isGameOver = createSelector(gameData, (state) => (state.gameSettings.activeRound > state.gameSettings.numberOfRound) ? true : false);

export const selectWinner = createSelector(selectOrderedListByScore, (players) => players[0]);
export const selectSecond = createSelector(selectOrderedListByScore, (players) => players[1]);
export const selectThird = createSelector(selectOrderedListByScore, (players) => players[2]);
export const selectPodium = createSelector(selectOrderedListByScore, (players) => players.splice(3, players.length - 3));
export const selectRest = createSelector(selectOrderedListByScore, (players) => players.splice(0, 3));

