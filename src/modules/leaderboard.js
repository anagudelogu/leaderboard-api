import FetchRequest from './fetchRequest.js';
import Score from './score.js';

export default class Leaderboard {
	static async getScores({ url }) {
		try {
			const fetchRequest = new FetchRequest({ url });
			const data = await fetchRequest.call();
			return data.result;
		} catch (error) {
			console.error(error);
		}
	}
}
