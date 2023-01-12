import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-chain', 'jest-extended'],
  coverageReporters: ['html', 'lcov', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 93,
      lines: 95,
      statements: 95,
    },
  },
  collectCoverageFrom: ['lib/**/*.ts', '!lib/sample/**/*.ts'],
}

export default config
