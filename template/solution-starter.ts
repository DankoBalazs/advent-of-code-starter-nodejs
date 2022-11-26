// @ts-ignore
import * as utils from "../../utils";

const year = -1;
const day = -1;
const solutionNumber = -1;

utils.getLines(year, day).then((lines: string[]) => {
  let result = calculateResult(lines);
  utils.logResult(result);
  // utils.submitResult(year, day, solutionNumber, result);  // Don't overuse it! The timeout between submits are going to increase.
});

function calculateResult(lines: string[]): any {
  // TODO Implement solution
  return undefined;
}
