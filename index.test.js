// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
     // Write ur test-code here!
    expect(capitalize('hello')).toBe('Hello');
  });
    test('should handle an empty string', () => {
      expect(capitalize('')).toBe('');
    });
  
    test('should handle a single-letter word', () => {
      expect(capitalize('a')).toBe('A');
    });
  
    test('should handle a sentence', () => {
      expect(capitalize('this is a test.')).toBe('This is a test.');
    });
  });

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
    const epochDate = 1609459200; // January 1, 2021
    expect(epochDateToUTC(epochDate)).toBe('Fri, 01 Jan 2021 00:00:00 GMT');
  });
  // write another 3 test case here!
  test('should handle a leap year epoch date', () => {
    const epochDate = 946684800; // 1 Januari 2000 00:00:00 GMT (tahun kabisat)
    expect(epochDateToUTC(epochDate)).toBe('Sat, 01 Jan 2000 00:00:00 GMT');
  });
  test('should handle a large epoch date', () => {
    const epochDate = 4102444800; // January 1, 2100
    expect(epochDateToUTC(epochDate)).toBe('Fri, 01 Jan 2100 00:00:00 GMT');
  });
  test('should handle epoch date as 0', () => {
    const epochDate = 0;
    expect(epochDateToUTC(epochDate)).toBe('Thu, 01 Jan 1970 00:00:00 GMT');
  });
});

