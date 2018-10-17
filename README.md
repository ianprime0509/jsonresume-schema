# JSON Resume Schema

This is an extension/adaptation of [the official JSON Resume
schema](https://github.com/ianprime0509/jsonresume-schema), provided
alongside a very small TypeScript library with type definitions and
validation functions for resume data. It is intended to be useful both
as a continuation of the original standard (which hasn't received
updates in some time) and as a utility for users of the original
standard (since any changes will be strictly backwards-compatible).

## Extensions to the standard

This section is a complete list of extensions to the original
standard.

- Certain properties are now required, such as the name of a language
  in the languages section. While this is technically
  backwards-incompatible, it is highly unlikely that any tools
  actually support the omission of these properties, and their
  omission does not make sense in any context anyways.
- Items within sections (such as a job or educational experience) may
  have an `importance` property, which is a non-negative number giving
  a relative amount of importance to that item. For example, a major
  job experience might be given an importance of 100 and a minor one
  an importance of 10; tools that support this property can use these
  values to generate shortened resumes with only items above a certain
  threshold.
