// @ts-ignore
import * as utils from "../../utils";
import { logSolution } from "../src/utils";

let year = -1;
let day = -1;

let result = "Implement solution";

const file: string = utils.getFileSync(year, day);
console.log(file);

logSolution(result);
