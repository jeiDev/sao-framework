const { pathsToModuleNameMapper } = require('ts-jest')
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig')


/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ['./'],
  transformIgnorePatterns: [
    "./node_modules/(?!lodash-es/.*)"
  ],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};