/* eslint-disable @typescript-eslint/no-explicit-any */
export type JestMock<T> = T extends (...args: readonly any[]) => any
  ? jest.MockedFunction<T>
  : T extends jest.Constructable
    ? jest.MockedClass<T>
    : T extends Record<PropertyKey, any>
      ? jest.Mocked<T>
      : jest.Mock<T>

/**
 * Maps to the proper jest mock type
 * @template T
 * @param {T} toMock Something to mock
 * @returns {JestMock<T>} Mocked version
 */
export const createMock = <T>(toMock: T) => toMock as JestMock<typeof toMock>
