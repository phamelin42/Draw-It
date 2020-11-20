export interface GameSettings {
    numberOfRound: number;
    durationOfRound: number;
    players: Array<Player>;
    activeRound: number;
    activePlayerId: number;
    selectedWord: string;
}

export interface Player {
    name: string;
    id: number;
    score: number;
}