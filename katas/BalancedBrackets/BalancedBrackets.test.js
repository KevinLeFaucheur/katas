import { expect, it } from "@jest/globals";
import { validate } from "./BalancedBrackets";


// Balanced Brackets

it('should return 1 if one bracket [', () => {
  expect(validate('[')).toBe(1);
})

it('should return 0 if brackets are []', () => {
  expect(validate('[]')).toBe(0);
})

it('should return -1 if brackets are ]', () => {
  expect(validate(']')).toBe(-1);
})

it('should return -1 if brackets are ][', () => {
  expect(validate('][')).toBe(-1);
})

it('should return 1 if brackets are [[]', () => {
  expect(validate('[[]')).toBe(1);
})

it('should return 1 if brackets are [[]]', () => {
  expect(validate('[[]]')).toBe(0);
})

it('should return -1 if brackets are [][]][', () => {
  expect(validate('[][]][')).toBe(-1);
})

