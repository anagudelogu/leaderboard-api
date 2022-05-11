import FetchRequest from './fetchRequest';

export default class Leaderboard {
	static async getScores({ url }) {
		const fetchRequest = new FetchRequest({ url });
		console.log(fetchRequest);
	}
}
