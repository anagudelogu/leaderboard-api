import { gameObj } from './game.js';
import Score from './score.js';
import Leaderboard from './leaderboard.js';

export default class Utility {
  static async getUrl() {
    try {
      const gameId = gameObj.id;
      const gameUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
      return gameUrl;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createNewScoreAPI({ name, score }) {
    try {
      const scr = new Score({ name, score });
      const gameUrl = await Utility.getUrl();
      const addScore = await Leaderboard.addScore(scr, gameUrl);
      return addScore;
    } catch (error) {
      throw new Error(error);
    }
  }
}
