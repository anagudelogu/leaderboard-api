import './styles.css';
import { createScore } from './services/leaderboardApi.js';
import UserInterface, { list } from './modules/userInterface.js';
import { addIconToFirstScore } from './helpers/scoreHelpers.js';

const refreshBtn = document.querySelector(
  '.leaderboard__header--btn',
);
const form = document.querySelector('form');

window.addEventListener('load', async () => {
  try {
    await UserInterface.displayScores();
    addIconToFirstScore();
  } catch (error) {
    throw new Error(error);
  }
});

refreshBtn.addEventListener('click', async () => {
  list.innerHTML = '';
  try {
    await UserInterface.displayScores();
    addIconToFirstScore();
  } catch (error) {
    throw new Error(error);
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const [name, score] = Array.from(form.elements);

  try {
    await createScore({
      user: name.value,
      score: score.value,
    });

    name.value = '';
    score.value = '';
  } catch (error) {
    throw new Error(error);
  }
});
