[![Format code](https://github.com/lbenie/ts-jest-mock/actions/workflows/format.yml/badge.svg)](https://github.com/lbenie/ts-jest-mock/actions/workflows/format.yml)
[![Release](https://github.com/lbenie/ts-jest-mock/actions/workflows/release.yml/badge.svg)](https://github.com/lbenie/ts-jest-mock/actions/workflows/release.yml)
[![Test code](https://github.com/lbenie/ts-jest-mock/actions/workflows/test.yml/badge.svg)](https://github.com/lbenie/ts-jest-mock/actions/workflows/test.yml)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/lbenie/ts-jest-mock/master)](https://stryker-mutator.github.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm](https://img.shields.io/npm/l/ts-jest-mock.svg)](https://github.com/lbenie/ts-jest-mock/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/ts-jest-mock.svg)](https://www.npmjs.com/package/ts-jest-mock)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ts-jest-mock.svg)](https://www.npmjs.com/package/ts-jest-mock)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)

# ts-jest-mock

A way to get jest type definition infered automagically.

## Pre-requisites

This library takes for granted that you have your tests setup with `jest` and `ts-jest`.

## Usage

Directly in a test

```ts
import { createMock } from 'ts-jest-mock'
import { someFn } from 'module_a'

jest.mock('module_a')

describe('something', () => {
  it('some test', () => {
    const someFnMock = createMock(someFn)

    someFnMock.mockReturnValue('') <-- Type inference yay :)
  })
})
```

Or with a beforeEach pattern

```ts
import { createMock } from 'ts-jest-mock'
import { someFn } from 'module_a'

jest.mock('module_a')

const someFnMock = createMock(someFn)

describe('something', () => {
  beforeEach(() => {
    someFnMock.mockReturnValue('') <-- Type inference yay :)
  })

  it('some test', () => {
    expect(someFnMock).toBe('')
  })
})
```
