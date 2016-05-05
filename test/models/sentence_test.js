import assert from 'assert';
import { describe, before, it } from 'mocha';
import { Record, Map, List }    from 'immutable';

import { Sentence, Token } from '../../app/models/sentence';

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

describe('Sentence', () => {
  describe('toAnnotatedText()', () => {
    it('should return annotated text', () => {
      const tokenThis = new Token({ word: 'this' }).addAnnotate('sj');
      const tokenIs   = new Token({ word: 'is' }).addAnnotate('v');
      const tokens    = new List([tokenThis, tokenIs]);
      const sentence  = new Sentence({ source: 'this is', tokens });
      assert(sentence.toAnnotatedText() === ' <sj>this</sj> <v>is</v>\n\n');
    });

    it('should concat annotations', () => {
      const tokenThis = new Token({ word: 'this' }).addAnnotate('sj');
      const tokenPen  = new Token({ word: 'pen' }).addAnnotate('sj');
      const tokenIs   = new Token({ word: 'is' }).addAnnotate('v');
      const tokens    = new List([tokenThis, tokenPen, tokenIs]);
      const sentence  = new Sentence({ source: 'this pen is', tokens });
      assert(sentence.toAnnotatedText() === ' <sj>this pen</sj> <v>is</v>\n\n');
    });
  });
});
