import { getRandom } from './utils';

export default class StarWarsCharacter {
  constructor( { character, actor }) {
    this.actor = actor;
    this.name  = character;
    this.sayigns = [
      "I haven't been given any quotes yet."
    ];
  }

  saySomething() {
    return this.sayings[ getRamdom(0, this.sayings.length - 1) ];
  }
}
