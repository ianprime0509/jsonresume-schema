# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Refactor section types (e.g. `Skills`) to be arrays of objects (e.g.
  `Skill[]`)

## [0.0.2] - 2018-09-30

### Added

- `validate` function, which returns error information on validation failure

### Changed

- `isValid` function now takes a parameter of type `any`, fixing earlier type
  of `object`

## [0.0.1] - 2018-09-27

### Added

- Schema adapted from the official [JSON Resume
  schema](https://github.com/jsonresume/resume-schema)
- TypeScript typings and AJV-based validator
