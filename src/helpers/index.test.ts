import {capitalize, seconds2HH} from "./";

describe('capitalize', () => {
  it('if empty return empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('return capitalized string', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})

describe('second2HH', () => {
  it('convert time properly', () => {
    expect(seconds2HH(0)).toBe('12 AM')
    expect(seconds2HH(1800)).toBe('12:30 AM')
    expect(seconds2HH(3600)).toBe('1 AM')
    expect(seconds2HH(21600)).toBe('6 AM')
    expect(seconds2HH(30600)).toBe('8:30 AM')
    expect(seconds2HH(43200)).toBe('12 PM')
    expect(seconds2HH(45000)).toBe('12:30 PM')
    expect(seconds2HH(70200)).toBe('7:30 PM')
    expect(seconds2HH(86399)).toBe('11:59 PM')
  })
})