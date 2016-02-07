import StarWarsCharacter from './StarWarsCharacter';

export default class C3PO extends StarWarsCharacter {
  constructor() {
    super( { actor: 'Anthony Daniels', character: 'C3PO'} );

    this.sayings = [
      "He’s holding a thermal detonator!"
    ];
  }
}
