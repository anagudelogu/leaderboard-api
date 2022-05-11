import FetchRequest from './fetchRequest';

export default class Game {
	name;
	url =
		'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
	method = 'POST';
	constructor({ name }) {
		this.name = name;
	}

	async newGame() {
		try {
			const fetchRequest = new FetchRequest({
				method: this.method,
				body: { name: this.name },
				url: this.url,
			});
			return await fetchRequest.call();
		} catch (error) {
			console.error(error);
		}
	}

	async getGameId() {
		const gameName = await this.newGame();
		const gameId = gameName.result
			.replace('Game with ID: ', '')
			.replace(' added.', '');
		return gameId;
	}
}
