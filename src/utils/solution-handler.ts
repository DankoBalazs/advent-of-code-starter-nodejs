import axios, { toFormData } from "axios";
import { readFileSync } from "fs";

export function logSolution(result: any) {
  console.log(`\x1B[35m${result}`);
}

export function submitSolution(
  year: number,
  day: number,
  solutionNumber: 1 | 2,
  result: any
) {
  let token = readFileSync(`../../token.txt`, {
    encoding: "utf-8",
  });

  let formData = toFormData({
    level: solutionNumber,
    answer: result,
  });

  axios
    .post(`https://adventofcode.com/${year}/day/${day}/answer`, formData, {
      headers: {
        Cookie: `session=${token}`,
      },
    })
    .then((response) => {
      console.log(response);
    });
}
