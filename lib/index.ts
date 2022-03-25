export type JestMock<T> = T extends (...args: any[]) => any
  ? jest.MockedFunction<T>
  : T extends jest.Constructable
  ? jest.MockedClass<T>
  : T extends Record<PropertyKey, any>
  ? jest.Mocked<T>
  : jest.Mock<T>

/**
 * Maps to the proper jest mock type
 * @param toMock Something to mock
 * @returns Mocked version
 */
export const createMock = <T>(toMock: T) => toMock as JestMock<typeof toMock>
