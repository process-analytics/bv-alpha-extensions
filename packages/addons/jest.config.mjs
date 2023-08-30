/*
Copyright 2023 Bonitasoft S.A.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // preset: 'ts-jest',
  // preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom', // need to access to the browser objects
  // extensionsToTreatAsEsm: ['.ts', '.esm.js'],
  testMatch: ['**/?(*.)+(spec|test).[t]s'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    // '^bpmn-visualization$': '<rootDir>/node_modules/bpmn-visualization/dist/bpmn-visualization.esm.js',
  },
  transform: {
    //'^.+\\.esm.js?$': 'ts-jest',
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
        useESM: true,
      },
    ],
  },
};
