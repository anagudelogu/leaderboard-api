import Game from './game';
import Score from './score';
import Leaderboard from './leaderboard';

export default class Utility {
	static async startGameAndGetUrl() {
		const game = new Game({ name: 'My game' });
		const gameId = await game.getGameId();
		const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
		return gameUrl;
	}

	static async createNewScoreAPI({ name, score }) {
		const scr = new Score({ name: name, score: score });
		console.log(scr);
		const gameUrl = await Utility.startGameAndGetUrl();
		const addScore = await Leaderboard.addScore(scr, gameUrl);
		console.log(addScore);
		return addScore;
	}
}
