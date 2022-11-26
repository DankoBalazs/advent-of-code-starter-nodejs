import { ColorCode, Message } from "./message";

export class TooEarlyResponseMessage extends Message {
  constructor() {
    super("Wait for the puzzle to unlock!", ColorCode.RED);
  }
}

export class UnauthenticatedMessage extends Message {
  constructor() {
    super("Invalid token. Check token.txt", ColorCode.RED);
  }
}

export class InternalServerErrorMessage extends Message {
  constructor() {
    super("Internal server error", ColorCode.RED);
  }
}

export class MissingTokenMessage extends Message {
  constructor() {
    super("Authentication error, missing token", ColorCode.RED);
  }
}

export class CorrectAnswerMessage extends Message {
  constructor() {
    super("Correct answer", ColorCode.GREEN);
  }
}

export class IncorrectAnswerMessage extends Message {
  constructor() {
    super("Incorrect answer", ColorCode.YELLOW);
  }
}

export class TooRecentAnswerMessage extends Message {
  constructor() {
    super(
      "You submitted an answer recently. Wait for the timeout to expire.",
      ColorCode.YELLOW
    );
  }
}
export class IncorrectLevelMessage extends Message {
  constructor() {
    super("You already solved this level.", ColorCode.YELLOW);
  }
}

export class UnhandledMessage extends Message {
  constructor() {
    super("Unhandled response", ColorCode.RED);
  }
}
