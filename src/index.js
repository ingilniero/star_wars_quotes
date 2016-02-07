import _ from 'lodash';

import Yoda from './yoda';
import C3PO from './c3po';
import Chewbacca from './chewbacca';
import R2D2 from './r2d2';
import { getRandom } from './utils';

const yoda = new Yoda();
const c3po = new C3PO();
const chewbacca = new Chewbacca();
const r2d2 = new R2D2();

const characters = { yoda, c3po, chewbacca, r2d2 };

function* randomQuote() {
  const chars = _.values( characters );
  const character = chars[ getRandom( 0, chars.length - 1) ];
  yield `${character.name}: ${character.saySomething()}`;
}

export default {
  characters,
  getRandomQuote() {
    return randomQuote().next().value;
  }
};
