/**
 * @file tests for the module
 * @author Ian Johnson <ianprime0509@gmail.com>
 * @copyright 2018 Ian Johnson
 * @license MIT
 */
import 'mocha';
import { expect } from 'chai';

import { isValid } from './index';

import complete from '../examples/valid/complete.json';
import empty from '../examples/valid/empty.json';
import emptyMeta from '../examples/valid/empty-meta.json';

import basicsWrongType from '../examples/invalid/basics-wrong-type.json';
import invalidEmail from '../examples/invalid/invalid-email.json';

describe('isValid', () => {
  it('should verify valid input', () => {
    expect(isValid(complete)).to.be.true;
    expect(isValid(empty)).to.be.true;
    expect(isValid(emptyMeta)).to.be.true;
  });

  it('should reject invalid input', () => {
    expect(isValid(basicsWrongType)).to.be.false;
    expect(isValid(invalidEmail)).to.be.false;
  });
});
