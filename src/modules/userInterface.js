import Leaderboard from './leaderboard.js';
import Utility from './utility.js';

export const LIST = document.querySelector(
  '.leaderboard__board--list'
);

export default class UserInterface {
  static async displayScores() {
    try {
      const sortedScores = await UserInterface.sortScores();
      sortedScores.forEach((score) => {
        UserInterface.createDOM(score);
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static createDOM({ user, score }) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.classList.add('leaderboard__board--listItem');
    LIST_ITEM.innerHTML = `<p>${user} : ${score}</p>`;
    LIST.appendChild(LIST_ITEM);
  }

  static async sortScores() {
    try {
      const gameUrl = Utility.getUrl();
      const scores = await Leaderboard.getScores({ url: gameUrl });
      return await scores.sort((a, b) => b.score - a.score);
    } catch (error) {
      throw new Error(error);
    }
  }
}
