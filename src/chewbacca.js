import StarWarsCharacter from './StarWarsCharacter';

export default Chewbacca extends StarWarsCharacter {
  constructor() {
    super({ actor: 'Peter Mayhew', character: 'Chewbacca'} );

    this.sayigns = [
      "[growls]"
    ];
  }
}
