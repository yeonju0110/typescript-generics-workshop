import { Equal, Expect } from "../helpers/type-utils";

/**
 * 변경 전
const makeStatus = <TStatuses extends string[]>(statuses: TStatuses) => {
  return statuses;
};
 */

/**
 * 변경 후
 */
const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>
];
