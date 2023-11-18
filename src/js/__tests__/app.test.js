import ArrayBufferConverter, { getBuffer } from "../app.js";

describe("ArrayBufferConverter", () => {
  let arrayBufferConverter;
  beforeEach(() => {
    arrayBufferConverter = new ArrayBufferConverter();
  });

  test("Testing the toString method without buffer", () => {
    expect(arrayBufferConverter.toString()).toBe("No buffer loaded");
  });

  test("Testing load data into buffer", () => {
    const buffer = new ArrayBuffer(10);
    arrayBufferConverter.load(buffer);
    expect(arrayBufferConverter.buffer).toBe(buffer);
  });

  test("Testing the toString method with buffer", () => {
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    expect(arrayBufferConverter.toString()).toBe(
      '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    );
  });
});
