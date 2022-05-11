import Game from './game';

export default class Utility {
	static async startGameAndGetUrl() {
		const game = new Game({ name: 'My game' });
		const gameId = await game.getGameId();
		const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
		return gameUrl;
	}
}
