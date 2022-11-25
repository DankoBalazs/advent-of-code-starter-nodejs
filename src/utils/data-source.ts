import * as FileSystem from "fs";
import * as ReadLine from "readline";

export async function forEachLineInFile(
  year: number,
  day: number,
  callback: (line: string) => any
) {
  if (year == -1 || day == -1) {
    throw new Error("Override default day and year");
  }
  const lineReader = ReadLine.createInterface({
    input: FileSystem.createReadStream(`./src/${year}/${day}/input.txt`),
  });
  for await (let line of lineReader) {
    callback(line);
  }
}
