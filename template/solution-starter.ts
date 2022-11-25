// @ts-ignore
import * as utils from "../../utils";

let year = -1;
let day = -1;

let result = "Implement a solution";

const lineCallback = (line: string) => {
  // TODO add solution
};

utils.forEachLineInFile(year, day, lineCallback).then(() => {
  utils.submitSolution(result);
});
