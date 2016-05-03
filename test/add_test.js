import assert from 'assert';
import { describe, before, it } from 'mocha';
import add from './add';

describe('add', () => {
  it('should return x + y', () => {
    assert(add(3, 2) === 5);
  });
});
