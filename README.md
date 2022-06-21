[![Format code](https://github.com/lbenie/ts-jest-mock/actions/workflows/format.yml/badge.svg)](https://github.com/lbenie/ts-jest-mock/actions/workflows/format.yml)
[![Release](https://github.com/lbenie/ts-jest-mock/actions/workflows/release.yml/badge.svg)](https://github.com/lbenie/ts-jest-mock/actions/workflows/release.yml)
[![Test code](https://github.com/lbenie/ts-jest-mock/actions/workflows/test.yml/badge.svg)](https://github.com/lbenie/ts-jest-mock/actions/workflows/test.yml)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Flbenie%2Fts-jest-mock%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/lbenie/ts-jest-mock/main)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm](https://img.shields.io/npm/l/ts-jest-mock.svg)](https://github.com/lbenie/ts-jest-mock/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/ts-jest-mock.svg)](https://www.npmjs.com/package/ts-jest-mock)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ts-jest-mock.svg)](https://www.npmjs.com/package/ts-jest-mock)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

# ts-jest-mock

A way to get jest type definition infered automagically.

## Pre-requisites

This library takes for granted that you have your tests setup with `jest`.

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://lbenie.xyz/"><img src="https://avatars.githubusercontent.com/u/7316046?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucien Bénié</b></sub></a><br /><a href="https://github.com/lbenie/ts-jest-mock/commits?author=lbenie" title="Code">💻</a> <a href="https://github.com/lbenie/ts-jest-mock/commits?author=lbenie" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/SebDuf"><img src="https://avatars.githubusercontent.com/u/12822182?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sébastien Dufour-Beauséjour</b></sub></a><br /><a href="https://github.com/lbenie/ts-jest-mock/commits?author=SebDuf" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
