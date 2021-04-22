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

const someFnMock = createMock(someFnMock)

describe('something', () => {
  beforeEach(() => {
    someFnMock.mockReturnValue('') <-- Type inference yay :)
  })

  it('some test', () => {
    expect(someFnMock).toBe('')
  })
})
```
