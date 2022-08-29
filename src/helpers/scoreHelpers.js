export const createScoreCard = ({ user, score }, num, list) => {
  const listItem = document.createElement('li');
  listItem.classList.add('leaderboard__board--listItem');
  listItem.innerHTML = `<span>${num}</span><p>${user}</p><span>${score}</span>`;
  list.appendChild(listItem);
};

export const addIconToFirstScore = () => {
  const firstScore = document.querySelector(
    '.leaderboard__board--listItem:nth-child(1) p',
  );
  if (!firstScore) return;
  const span = document.createElement('span');
  span.classList.add('material-icons');
  span.textContent = 'military_tech';
  firstScore.appendChild(span);
};
