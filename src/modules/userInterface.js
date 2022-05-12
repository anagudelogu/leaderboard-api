import Leaderboard from './leaderboard.js';
import Utility from './utility.js';

export const LIST = document.querySelector(
  '.leaderboard__board--list',
);

export default class UserInterface {
  static async displayScores() {
    try {
      const sortedScores = await UserInterface.sortScores();
      sortedScores.forEach((score, num) => {
        UserInterface.createDOM(score, num + 1);
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static createDOM({ user, score }, num) {
    const LIST_ITEM = document.createElement('li');
    LIST_ITEM.classList.add('leaderboard__board--listItem');
    LIST_ITEM.innerHTML = `<span>${num}</span><p>${user}</p><span>${score}</span>`;
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

  static addIconToFirstScore() {
    const firstScore = document.querySelector(
      '.leaderboard__board--listItem:nth-child(1) p',
    );
    if (!firstScore) return;
    const span = document.createElement('span');
    span.classList.add('material-icons');
    span.textContent = 'military_tech';
    firstScore.appendChild(span);
  }
}
