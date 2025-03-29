import { describe, it } from "test/bdd";
import { assertEquals } from "assert";
import { isEven, someFn } from "./demo.js";

describe("someFn testing", () => {
  it("should give true", () => {
    assertEquals(someF(), true);
  });
});

describe("isEven testing", () => {
  it("should give false", () => {
    assertEquals(isEven(3), false);
  });
  // it("should give true", () => {
  //   assertEquals(isEven(2), true);
  // });
});
