import StarWarsCharacter from './StarWarsCharacter';

export default class R2D2 extends StarWarsCharacter {
  constructor() {
    super( { actor: '', character: 'Kenny Baker'});

    this.sayings = [
      "beep bloop blop bleep boop"
    ];
  }
}
