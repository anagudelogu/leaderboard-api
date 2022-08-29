import FetchRequest from '../helpers/fetchRequest.js';

const gameId = 'Jkc5GQWCTcCN7SI7aC3G';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/`;

const endpoint = 'scores';

export const fetchScores = async () => {
  const fetchRequest = new FetchRequest({ url: `${url}${endpoint}` });
  try {
    const scores = await fetchRequest.call();
    return scores.result.sort((a, b) => b.score - a.score);
  } catch (error) {
    throw new Error(error);
  }
};

export const createScore = async ({ user, score }) => {
  const fetchRequest = new FetchRequest({
    method: 'POST',
    url: `${url}${endpoint}`,
    body: {
      user,
      score,
    },
  });
  try {
    await fetchRequest.call();
  } catch (error) {
    throw new Error(error);
  }
};
