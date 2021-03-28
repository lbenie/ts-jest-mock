/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  tsconfigFile: 'tsconfig.spec.json',
  mutator: 'typescript',
  mutate: ['lib/index.ts'],
}
