import './styles.css';
import Utility from './modules/utility.js';
import UserInterface, { LIST } from './modules/userInterface.js';

const refreshBtn = document.querySelector(
  '.leaderboard__header--btn',
);
const form = document.querySelector('form');

window.addEventListener('load', async () => {
  try {
    const displayScores = await UserInterface.displayScores();
    UserInterface.addIconToFirstScore();
    return displayScores;
  } catch (error) {
    throw new Error(error);
  }
});

refreshBtn.addEventListener('click', async () => {
  try {
    LIST.innerHTML = '';
    const displayScores = await UserInterface.displayScores();
    UserInterface.addIconToFirstScore();
    return displayScores;
  } catch (error) {
    throw new Error(error);
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
    throw new Error(error);
  }
});
