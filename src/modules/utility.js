import { gameObj } from './game';
import Score from './score';
import Leaderboard from './leaderboard';

export default class Utility {
	static async getUrl() {
		try {
			const gameId = gameObj.id;
			const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
			return gameUrl;
		} catch (error) {
			console.error(error);
		}
	}

	static async createNewScoreAPI({ name, score }) {
		try {
			const scr = new Score({ name: name, score: score });
			const gameUrl = await Utility.getUrl();
			const addScore = await Leaderboard.addScore(scr, gameUrl);
			return addScore;
		} catch (error) {
			console.error(error);
		}
	}
}
