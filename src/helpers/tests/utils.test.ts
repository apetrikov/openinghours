import {capitalize} from "../utils";

describe('capitalize', () => {
  it('if empty return empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('return capitalized string', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})
