import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * There are two possible solutions to this problem - and it's
 * to do with the way you specify the generic. Can you get
 * both solutions?
 */

/**
 * 변경 전
const typedObjectKeys = (obj: unknown) => {
  return Object.keys(obj);
};
 */

/**
 * 변경 후 #1: keyof 이용
 */
const typedObjectKeys1 = <TObject extends object>(obj: TObject) => {
  return Object.keys(obj) as Array<keyof TObject>;
};

/**
 * 변경 후 #2: Record 이용
 */
const typedObjectKeys2 = <TKey extends string>(obj: Record<TKey, any>) => {
  return Object.keys(obj) as Array<TKey>;
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys1({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys2({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
