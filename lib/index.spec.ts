import { createMock } from './index'
import type { JestMock } from './index'
import { sampleClass } from './sample/clazz'
import { sampleFunction } from './sample/func'
import { sampleObj } from './sample/obj'
import { sampleSomething } from './sample/something'

jest.mock('./sample/clazz.ts')
jest.mock('./sample/func.ts')
jest.mock('./sample/obj.ts')
jest.mock('./sample/something.ts')

describe('lib/index', () => {
  let sampleClassMock: JestMock<typeof sampleClass>
  let sampleFunctionMock: JestMock<typeof sampleFunction>
  let sampleObjMock: JestMock<typeof sampleObj>
  let sampleSomethingMock: JestMock<typeof sampleSomething>

  beforeEach(() => {
    sampleClassMock = createMock(sampleClass)
    sampleFunctionMock = createMock(sampleFunction)
    sampleObjMock = createMock(sampleObj)
    sampleSomethingMock = createMock(sampleSomething)
  })

  it('properly infers a class', () => {
    expect(typeof sampleClassMock)
      .toBe('function')
      .toBeDefined()
  })

  it('properly infers a function', () => {
    expect(typeof sampleFunctionMock)
      .toBe('function')
      .toBeDefined()
  })

  it('properly infers an object', () => {
    expect(typeof sampleObjMock)
      .toBe('object')
      .toBeDefined()
  })

  it('properly infers an unknown value', () => {
    expect(typeof sampleSomethingMock).toBe('undefined')
  })
})
