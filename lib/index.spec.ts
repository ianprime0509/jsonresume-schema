/**
 * @file tests for the module
 * @author Ian Johnson <ianprime0509@gmail.com>
 * @copyright 2018 Ian Johnson
 * @license MIT
 */
import { expect } from 'chai';
import 'mocha';

import { isValid, validate } from './index';

import complete from '../examples/valid/complete.json';
import emptyMeta from '../examples/valid/empty-meta.json';
import empty from '../examples/valid/empty.json';

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

describe('validate', () => {
  it('should return an empty array on valid input', () => {
    expect(validate(complete)).to.be.an('array').that.is.empty;
    expect(validate(empty)).to.be.an('array').that.is.empty;
    expect(validate(emptyMeta)).to.be.an('array').that.is.empty;
  });

  it('should return an array with error info on invalid input', () => {
    expect(validate(basicsWrongType)).to.be.an('array').that.is.not.empty;
    expect(validate(invalidEmail)).to.be.an('array').that.is.not.empty;
  });
});
