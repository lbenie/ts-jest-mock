export type JestMock<T> = T extends (...args: unknown[]) => unknown
  ? jest.MockedFunction<T>
  : T extends jest.Constructable
  ? jest.MockedClass<T>
  : T extends Record<string | number | symbol, unknown>
  ? jest.Mocked<T>
  : jest.Mock

/**
 * Maps to the proper jest mock type
 * @param toMock Something to mock
 * @returns Mocked version
 */
export const createMock = <T>(toMock: T) => toMock as JestMock<T>
