import StarWarsCharacter from './StarWarsCharacter';

export default class Yoda extends StarWarsCharacter {
  constructor() {
    super( { actor: 'Frank Oz', character: 'Yoda'} );

    this.sayings = [
      "When 900 years old, you reach… Look as good, you will not."
    ];
  }
}
