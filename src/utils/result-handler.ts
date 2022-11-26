import axios from "axios";
import { readFileSync } from "fs";
import { URLSearchParams } from "url";
import { MessageFactory } from "./message/message-factory";
import { ColorCode } from "./message/message";

export function logResult(result: any) {
  console.log(`${ColorCode.PURPLE}${result}`);
}

export function submitResult(
  year: number,
  day: number,
  solutionNumber: 1 | 2,
  result: any
) {
  let token = readFileSync(`./token.txt`, {
    encoding: "utf-8",
  });

  let params = new URLSearchParams({
    level: solutionNumber + "",
    answer: result + "",
  });

  let headers = {
    Cookie: `session=${token}`,
    "cache-control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  axios
    .post(`https://adventofcode.com/${year}/day/${day}/answer`, params, {
      headers: headers,
    })
    .then((response) => {
      MessageFactory.getMessageByResponseBody(response.data).print();
    });
}
