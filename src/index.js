import './styles.css';
import Utility from './modules/utility';
import UserInterface, { LIST } from './modules/userInterface';

const refreshBtn = document.querySelector(
	'.leaderboard__header--btn'
);
const form = document.querySelector('form');

window.addEventListener('load', async () => {
	try {
		const displayScores = await UserInterface.displayScores();
		return displayScores;
	} catch (error) {
		console.error(error);
	}
});

refreshBtn.addEventListener('click', async () => {
	try {
		LIST.innerHTML = '';
		const displayScores = await UserInterface.displayScores();
		return displayScores;
	} catch (error) {
		console.error(error);
	}
});

form.addEventListener('submit', async (e) => {
	try {
		e.preventDefault();
		const [name, score] = Array.from(form.elements);
		const createNewScore = await Utility.createNewScoreAPI({
			name: name.value,
			score: score.value,
		});
		name.value = '';
		score.value = '';
		return createNewScore;
	} catch (error) {
		console.error(error);
	}
});
