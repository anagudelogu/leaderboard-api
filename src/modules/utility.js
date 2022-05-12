import { gameObj } from './game.js';
import Score from './score.js';
import Leaderboard from './leaderboard.js';

export default class Utility {
  static getUrl() {
    const gameId = gameObj.id;
    const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
    return gameUrl;
  }

  static async createNewScoreAPI({ name, score }) {
    try {
      const scr = new Score({ name, score });
      const gameUrl = Utility.getUrl();
      const addScore = await Leaderboard.addScore(scr, gameUrl);
      return addScore;
    } catch (error) {
      throw new Error(error);
    }
  }
}
