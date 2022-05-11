import FetchRequest from './fetchRequest.js';

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

	static async addScore({ name, score }, url) {
		try {
			const fetchRequest = new FetchRequest({
				method: 'POST',
				url: url,
				body: {
					user: name,
					score: score,
				},
			});
			const data = await fetchRequest.call();
			return data;
		} catch (error) {
			console.error(error);
		}
	}
}
