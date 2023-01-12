import type { StrykerOptions } from '@stryker-mutator/api/core'

export const config: Partial<StrykerOptions> = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  testRunner: 'jest',
  coverageAnalysis: 'all',
  tsconfigFile: 'tsconfig.spec.json',
  mutate: ['lib/index.ts'],
  jest: {
    configFile: 'jest.config.ts',
  },
}

export default config
