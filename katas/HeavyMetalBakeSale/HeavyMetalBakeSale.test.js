const { it, expect } = require("@jest/globals");
const { purchase, calculateChange } = require("./HeavyMetalBakeSale");

// Purchase function
it('should purchase one Brownie', () => {
  expect(purchase('B')).toBe('$0.75');
})
it('should purchase one Muffin', () => {
  expect(purchase('M')).toBe('$1.00');
})
it('should purchase one Cake Pop', () => {
  expect(purchase('C')).toBe('$1.35');
})
it('should purchase one Water', () => {
  expect(purchase('W')).toBe('$1.50');
})
it('should purchase one brownie and one muffin', () => {
  expect(purchase('B,M')).toBe('$1.75');
})
it('should purchase one brownie, one muffin and one Cake Pop', () => {
  expect(purchase('B,M,C')).toBe('$3.10');
})
it('should purchase one each', () => {
  expect(purchase('B,M,C,W')).toBe('$4.60');
})

// Calculate Change
it('should change $0.50', () => {
  expect(calculateChange(4.00, 4.50)).toBe('$0.50');
})
it('should change $1.00', () => {
  expect(calculateChange(4.00, 5.00)).toBe('$1.00');
})
it('should log "Not enough money."', () => {
  expect(calculateChange(5.00, 4.00)).toBe('Not enough money.');
})