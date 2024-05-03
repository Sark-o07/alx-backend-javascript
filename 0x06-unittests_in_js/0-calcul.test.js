const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
  it('check rounded numbers sum', () => {
    const sum = calculateNumber(1, 2);
    assert.strictEqual(sum, 3);
  });
  it('check rounded numbers sum', () => {
    const res = calculateNumber(1.4, 2.2);
    assert.strictEqual(res, 3);
  });
  it('check rounded numbers sum', () => {
    const res = calculateNumber(1.6, 2.7);
    assert.strictEqual(res, 5);
  });
  it('check rounded zero-numbers sum', () => {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it('check rounded negative numbers sum', () => {
    const res = calculateNumber(-1.6, -1.7);
    assert.strictEqual(res, -4);
  });
  it('check rounded negative numbers sum', () => {
    const res = calculateNumber(-1.4, -1.3);
    assert.strictEqual(res, -2);
  });
});
