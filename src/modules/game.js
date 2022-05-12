export default class Game {
	name;
	id = 'kvSJeXtE0f2nSMWvmPG4';
	constructor({ name } = {}) {
		this.name = name;
	}
}

export const gameObj = new Game({ name: 'AA Game' });
