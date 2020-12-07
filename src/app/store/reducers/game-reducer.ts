import { GameSettings } from 'src/app/models/game-settings.model';
import { GameSettingsActions, GameSettingsActionsTypes } from '../actions/game-actions';
import * as R from 'ramda';
import { PlayerListComponent } from 'src/app/player-list/player-list.component';

export const initialState: GameSettings =  {
    numberOfRound: 1,
    durationOfRound: 10,
    players: [],
    activeRound: 1,
    activePlayerId: 1,
    selectedWord: '',
    langage: 'FR'
};

export function gameSettingsReducer(state = initialState, action: GameSettingsActions): GameSettings {
  switch (action.type) {
    case GameSettingsActionsTypes.SetRound:
        return {...state, numberOfRound: action.payload};
    case GameSettingsActionsTypes.SetTime:
        return {...state, durationOfRound: action.payload};
    case GameSettingsActionsTypes.SetActivePlayer:
        if (state.activePlayerId === state.players.length) {
            return {...state, activePlayerId: 1, activeRound: state.activeRound + 1};
        } else {
            return {...state, activePlayerId: state.activePlayerId + 1};
        }
    case GameSettingsActionsTypes.SetActiveRound:
        return {...state, activeRound: state.activeRound + 1};
    case GameSettingsActionsTypes.SetPlayer:
        if (state.players.length < 24) {
            return R.set(R.lensProp('players'), R.append({name: action.payload, id: state.players.length +1, score: 0}, state.players), state)
        } else {
            return state;
        }
    case GameSettingsActionsTypes.SelectWord:
        return {...state, selectedWord: action.payload};
    case GameSettingsActionsTypes.GivePoint:
        return {...state,
            players: state.players.map(player => {
                if (player.id === action.payload) {
                    return {name: player.name, id: player.id, score: player.score + 10}
                } else {
                    return player;
                }
            })
        };
    case GameSettingsActionsTypes.SetLangage:
        return {...state, langage: action.payload}
    default:
        return state;
  }
}
