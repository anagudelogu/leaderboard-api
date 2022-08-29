import { fetchScores } from '../services/leaderboardApi.js';
import { createScoreCard } from '../helpers/scoreHelpers.js';

export const list = document.querySelector(
  '.leaderboard__board--list',
);

export default class UserInterface {
  static async displayScores() {
    try {
      const sortedScores = await fetchScores();
      sortedScores.forEach((score, num) => {
        createScoreCard(score, num + 1, list);
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
