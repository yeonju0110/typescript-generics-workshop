import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * 오답
 * 이유: 반드시 문자열이어야 한다는 제약 조건이 없음
 */
{
  const returnWhatIPassIn = <T>(t: T) => t;
}

/**
 * 정답
 * 이유: 반드시 문자열이어야 한다는 제약을 걸기
 */
export const returnWhatIPassIn = <T extends string>(t: T) => t;

it("Should ONLY allow strings to be passed in", () => {
  const a = returnWhatIPassIn("a");

  type test1 = Expect<Equal<typeof a, "a">>;

  // @ts-expect-error -> 아래 구문은 오류가 발생해야 한다는 뜻! ✨
  returnWhatIPassIn(1);

  // @ts-expect-error
  returnWhatIPassIn(true);

  // @ts-expect-error
  returnWhatIPassIn({
    foo: "bar",
  });
});
