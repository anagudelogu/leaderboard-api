import Leaderboard from './leaderboard';
import Utility from './utility';
import Score from './score';

const LIST = document.querySelector('.leaderboard__board--list');

export default class UserInterface {
	static async displayScores() {
		const gameUrl = await Utility.startGameAndGetUrl();
		const scores = await Leaderboard.getScores({ url: gameUrl });
		scores.forEach((score) => {
			this.createDOM(score);
		});
	}
	createDOM({ user, score }) {
		const LIST_ITEM = document.createElement('li');
		LIST_ITEM.classList.add('leaderboard__board--listItem');
		LIST_ITEM.innerHTML = `<p>${user} : ${score}</p>`;
		LIST.appendChild(LIST_ITEM);
	}
}
