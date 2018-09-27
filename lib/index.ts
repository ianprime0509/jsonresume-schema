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

export function isValid(data: object): data is JSONResume {
  return validator(data) as boolean;
}
