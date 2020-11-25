export interface GameSettings {
    numberOfRound: number;
    durationOfRound: number;
    players: Array<Player>;
    activeRound: number;
    activePlayer: Player;
    activePlayerId: number;
    selectedWord: string;
    langage: 'FR' | 'EN';
}

export interface Player {
    name: string;
    id: number;
    score: number;
}