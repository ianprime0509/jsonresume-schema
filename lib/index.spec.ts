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
import negativeImportance from '../examples/invalid/negative-importance.json';

describe('isValid', () => {
  it('returns true when given a complete, valid resume', () => {
    expect(isValid(complete)).to.be.true;
  });

  it('returns true when given an empty resume object', () => {
    expect(isValid(empty)).to.be.true;
  });

  it('returns true when given a resume with an empty meta object', () => {
    expect(isValid(emptyMeta)).to.be.true;
  });

  it('returns false when given a resume where the basics property is an array', () => {
    expect(isValid(basicsWrongType)).to.be.false;
  });

  it('returns false when given a resume with an invalid email address', () => {
    expect(isValid(invalidEmail)).to.be.false;
  });

  it('returns false when given a resume containing a negative importance value', () => {
    expect(isValid(negativeImportance)).to.be.false;
  });
});

describe('validate', () => {
  it('returns an empty array when given a complete, valid resume', () => {
    expect(validate(complete)).to.be.an('array').that.is.empty;
  });

  it('returns an empty array when given an empty resume object', () => {
    expect(validate(empty)).to.be.an('array').that.is.empty;
  });

  it('returns an empty array when given a resume with an empty meta object', () => {
    expect(validate(emptyMeta)).to.be.an('array').that.is.empty;
  });

  it('returns a non-empty array when given a resume where the basics property is an array', () => {
    expect(validate(basicsWrongType)).to.be.an('array').that.is.not.empty;
  });

  it('returns a non-empty array when given a resume with an invalid email address', () => {
    expect(validate(invalidEmail)).to.be.an('array').that.is.not.empty;
  });

  it('returns a non-empty array when given a resume containing a negative importance value', () => {
    expect(validate(negativeImportance)).to.be.an('array').that.is.not.empty;
  });
});
