import assert from 'assert';
import { describe, before, it } from 'mocha';

import { Token } from '../../app/models/sentence';

describe('Token', () => {
  describe('toAnnotatedText()', () => {
    it('should return plain word when no annotaion', () => {
      const token = new Token({ word: 'Tom' });
      assert(token.toAnnotatedText() === 'Tom');
    });

    it('should return annotated word when one annotaion', () => {
      let token = new Token({ word: 'Tom' });
      token = token.addAnnotate('sj');
      assert(token.toAnnotatedText() === '<sj>Tom</sj>');
    });

    it('should return annotated word when two annotaions', () => {
      let token = new Token({ word: 'Tom' });
      token = token.addAnnotate('sj').addAnnotate('v');
      assert(token.toAnnotatedText() === '<v><sj>Tom</sj></v>');
    });
  });
});
