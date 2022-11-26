import * as FileSystem from "fs";
import { readFileSync } from "fs";
import * as ReadLine from "readline";
import { fromEvent, takeUntil } from "rxjs";

export async function forEachLineInFile(
  year: number,
  day: number,
  callback: (line: string) => any
) {
  const lineReader = ReadLine.createInterface({
    input: FileSystem.createReadStream(`./src/${year}/${day}/input.txt`),
  });
  for await (let line of lineReader) {
    callback(line);
  }
}

export async function getLines(year: number, day: number): Promise<string[]> {
  const lineReader = ReadLine.createInterface({
    input: FileSystem.createReadStream(`./src/${year}/${day}/input.txt`),
  });
  let lines: string[] = [];
  for await (let line of lineReader) {
    lines.push(line);
  }
  return lines;
}

export function getFileSync(year: number, day: number) {
  return readFileSync(`./src/${year}/${day}/input.txt`, {
    encoding: "utf-8",
  });
}

export function linesAsObservable(year: number, day: number) {
  const lineReader = ReadLine.createInterface({
    input: FileSystem.createReadStream(`./src/${year}/${day}/input.txt`),
  });
  return fromEvent<string>(lineReader, "line", (x) => x).pipe(
    takeUntil(fromEvent(lineReader, "close"))
  );
}

export async function getFileAs2DArr(
  year: number,
  day: number
): Promise<string[][]> {
  let res: string[][] = [];
  await forEachLineInFile(year, day, (line) => {
    res.push(line.split(""));
  });
  return res;
}

export async function getFileAs2DNumberArr(
  year: number,
  day: number
): Promise<number[][]> {
  let res: number[][] = [];
  await forEachLineInFile(year, day, (line) => {
    res.push(line.split("").map((c) => parseInt(c, 10)));
  });
  return res;
}
