/**
 * @file the contents of the module.
 * @author Ian Johnson <ianprime0509@gmail.com>
 * @copyright 2018 Ian Johnson
 * @license MIT
 */
export * from './schema';

import Ajv from 'ajv';
import schema from '../resume.schema.json';
import { JSONResume } from './schema';

const ajv = new Ajv();
const validator = ajv.compile(schema);

/**
 * Checks whether the given object is a valid JSON Resume.
 *
 * This function does not return any information if validation fails (for that,
 * use {@link validate}). This function is mostly useful as a type guard when
 * such additional information is unnecessary.
 *
 * @param data the object to check
 * @returns whether the given object is a valid JSON Resume
 */
export function isValid(data: any): data is JSONResume {
  return validator(data) as boolean;
}

/**
 * Checks whether the given object is a valid JSON Resume, returning validation
 * errors on failure.
 *
 * @param data the object to check
 * @returns any errors encountered during validation, or an empty array if valid
 */
export function validate(data: any): string[] {
  if (!validator(data) && validator.errors) {
    return validator.errors.map(
      e => `${e.dataPath}: ${e.message ? e.message : e.keyword}`,
    );
  }
  return [];
}
