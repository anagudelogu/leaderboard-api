export default class Game {
  name;

  id = 'o4CGZi3lejFqekauVqR4';

  constructor({ name } = {}) {
    this.name = name;
  }
}

export const gameObj = new Game({ name: 'AA Game' });
