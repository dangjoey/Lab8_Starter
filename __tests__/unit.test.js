// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Check if (123)456-7890 is a valid phone number', () => {
  expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
});

test('Check if 123-456-7890 is a valid phone number', () => {
  expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('Check if 111 is an invalid phone number', () => {
  expect(functions.isPhoneNumber("111")).toBe(false);
});

test('Check if 012-345-678 is an invalid phone number', () => {
  expect(functions.isPhoneNumber("012-345-678")).toBe(false);
});

test('Check if test@test.com is a valid email', () => {
  expect(functions.isEmail("test@test.com")).toBe(true);
});

test('Check if hello@world.com is a valid email', () => {
  expect(functions.isEmail("hello@world.com")).toBe(true);
});

test('Check if meow@1.com is an invalid email', () => {
  expect(functions.isEmail("meow@1.com")).toBe(false);
});

test('Check if 123 is an invalid email', () => {
  expect(functions.isEmail("123")).toBe(false);
});

test('Check if bhaj217gqdhq is a valid password', () => {
  expect(functions.isStrongPassword("bhaj217gqdhq")).toBe(true);
});

test('Check if nbc_dsadn is a valid password', () => {
  expect(functions.isStrongPassword("nbc_dsadn")).toBe(true);
});

test('Check if 123 is an invalid password', () => {
  expect(functions.isStrongPassword("123")).toBe(false);
});

test('Check if .,hjakhs is an invalid password', () => {
  expect(functions.isStrongPassword(".,hjakhs")).toBe(false);
});

test('Check if 01/01/2001 is a valid date', () => {
  expect(functions.isDate("01/01/2001")).toBe(true);
});

test('Check if 11/14/2021 is an valid date', () => {
  expect(functions.isDate("11/14/2021")).toBe(true);
});

test('Check if test is an invalid date', () => {
  expect(functions.isDate("11/141/2021")).toBe(false);
});

test('Check if 11/14/20211 is an invalid date', () => {
  expect(functions.isDate("11/14/20211")).toBe(false);
});

test('Check if #fff is a valid hex color', () => {
  expect(functions.isHexColor("#fff")).toBe(true);
});

test('Check if #000 is a valid hex color', () => {
  expect(functions.isHexColor("#000")).toBe(true);
});

test('Check if #0 is an invalid hex color', () => {
  expect(functions.isHexColor("#0")).toBe(false);
});

test('Check if #000000000 is an invalid hex color', () => {
  expect(functions.isHexColor("#000000000")).toBe(false);
});
