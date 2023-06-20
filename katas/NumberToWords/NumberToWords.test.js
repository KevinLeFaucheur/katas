import { expect, it } from "@jest/globals";
import { Hyphenate } from "./NumberToWords";

// Units
it('should hyphenate the correct unit', () => {
  expect(Hyphenate(0)).toBe('zero');
  expect(Hyphenate(1)).toBe('one');
  expect(Hyphenate(9)).toBe('nine');
})

// Teens
it('should hyphenate the correct tens', () => {
  expect(Hyphenate(10)).toBe('ten');
  expect(Hyphenate(15)).toBe('fifteen');
  expect(Hyphenate(19)).toBe('nineteen');
})

// Tens
it('should hyphenate the correct tens', () => {
  expect(Hyphenate(24)).toBe('twenty four');
  expect(Hyphenate(55)).toBe('fifty five');
  expect(Hyphenate(89)).toBe('eighty nine');
})

// Hundreds
it('should hyphenate the correct hundreds', () => {
  expect(Hyphenate(101)).toBe('one hundred one');
  expect(Hyphenate(634)).toBe('six hundred thirty four');
  expect(Hyphenate(982)).toBe('nine hundred eighty two');
})

// Thousands