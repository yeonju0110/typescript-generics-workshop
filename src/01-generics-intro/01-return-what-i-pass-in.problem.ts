import { Equal, Expect } from "../helpers/type-utils";

/**
 * 오답
 * t는 unknown 타입 -> TypeScript가 그것의 실제 타입에 대한 정보를 가지지 않음
 * 1이나 "matt"와 같은 값을 전달하면 TypeScript는 그들의 구체적인 타입에 대한 정보를 알 수 없음.
 */
{
  const returnWhatIPassIn = (t: unknown) => {
    return t;
  };
}

/**
 * 정답
 * 매개변수 t가 제네릭 타입 T로 되어 있기 때문에, 값을 전달할 때 TypeScript가 그것의 특정 타입을 추론하고 보존하게 함
 */
const returnWhatIPassIn = <T>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
