import { GameSettings } from 'src/app/models/game-settings.model';
import { GameSettingsActions, GameSettingsActionsTypes } from '../actions/game-actions';
import * as R from 'ramda';

export const initialState: GameSettings =  {
    numberOfRound: 3,
    durationOfRound: 120,
    players: [],
    activeRound: 0,
    activePlayerId: 1,
    selectedWord: ''
};

export function gameSettingsReducer(state = initialState, action: GameSettingsActions): GameSettings {
  switch (action.type) {
    case GameSettingsActionsTypes.SetRound:
        return {...state, numberOfRound: action.payload};
    case GameSettingsActionsTypes.SetTime:
        return {...state, durationOfRound: action.payload};
    case GameSettingsActionsTypes.SetActivePlayer:
        if (state.activePlayerId === state.players.length) {
            return {...state, activePlayerId: 1}
        } else {
            return {...state, activePlayerId: state.activePlayerId++};
        }
    case GameSettingsActionsTypes.SetPlayer:
        return R.set(R.lensProp('players'), R.append({name: action.payload, id: state.players.length +1, score: 0}, state.players), state)
    case GameSettingsActionsTypes.SelectWord:
        return {...state, selectedWord: action.payload};
    case GameSettingsActionsTypes.GivePoint:
        const playerIndex = state.players.findIndex(x => x.id === action.payload - 1);
        console.log(playerIndex);
        return R.set(R.lensPath('players', playerIndex, 'score'), state.players[playerIndex].score++, state)
    default:
        return state;
  }
}
