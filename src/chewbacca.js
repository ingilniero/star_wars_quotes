import StarWarsCharacter from './StarWarsCharacter';

export default class Chewbacca extends StarWarsCharacter {
  constructor() {
    super({ actor: 'Peter Mayhew', character: 'Chewbacca'} );

    this.sayigns = [
      "[growls]"
    ];
  }
}
