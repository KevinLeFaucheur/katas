import { expect, test } from "@jest/globals";
import { validateIP } from "./IPValidate";

test('1.1.1.1 should true', () => {
  expect(validateIP('1.1.1.1')).toBe(true);
})

test('192.168.1.1 should true', () => {
  expect(validateIP('192.168.1.1')).toBe(true);
})

test('10.0.0.1 should true', () => {
  expect(validateIP('10.0.0.1')).toBe(true);
})

test('127.0.0.1 should true', () => {
  expect(validateIP('127.0.0.1')).toBe(true);
})

test('192.168.1.0 should true', () => {
  expect(validateIP('192.168.1.0')).toBe(true);
})

test('0.0.0.0 should false', () => {
  expect(validateIP('0.0.0.0')).toBe(false);
})

test('255.255.255.255 should false', () => {
  expect(validateIP('255.255.255.255')).toBe(false);
})

test('10.0.1 should false', () => {
  expect(validateIP('10.0.1')).toBe(false);
})

test('192.168.01.1 should false', () => {
  expect(validateIP('192.168.01.1')).toBe(false);
})

test('192.168.1.00 should false', () => {
  expect(validateIP('192.168.1.00')).toBe(false);
})