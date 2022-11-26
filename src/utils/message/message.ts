export abstract class Message {
  private readonly displayMessage: string;
  private readonly colorCode: ColorCode;

  protected constructor(displayMessage: string, colorCode: ColorCode) {
    this.displayMessage = displayMessage;
    this.colorCode = colorCode;
  }

  public print() {
    console.log(`${this.colorCode}${this.displayMessage}`);
  }
}

export enum ColorCode {
  GREEN = "\x1B[32m",
  RED = "\x1B[31m",
  YELLOW = "\x1B[33m",
  PURPLE = "\x1B[35m",
}
