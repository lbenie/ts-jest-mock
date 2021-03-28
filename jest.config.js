/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-chain', 'jest-extended'],
  coverageReporters: ['html', 'lcov', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  transform: {
    '^.+\\.ts': 'ts-jest',
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
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  collectCoverageFrom: ['lib/**/*.ts', '!lib/sample/**/*.ts'],
}
