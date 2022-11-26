import {
  CorrectAnswerMessage,
  IncorrectAnswerMessage,
  IncorrectLevelMessage,
  InternalServerErrorMessage,
  MissingTokenMessage,
  TooEarlyResponseMessage,
  TooRecentAnswerMessage,
  UnauthenticatedMessage,
  UnhandledMessage,
} from "./concrete-messages";
import { Message } from "./message";

export class MessageFactory {
  static getMessageByResponseBody(body: string): Message {
    if (includesIgnoreCase(body, responseTexts.TOO_EARLY_REQUEST_TEXT)) {
      return new TooEarlyResponseMessage();
    }
    if (includesIgnoreCase(body, responseTexts.UNAUTHENTICATED_INPUT_TEXT)) {
      return new UnauthenticatedMessage();
    }
    if (includesIgnoreCase(body, responseTexts.INTERNAL_SERVER_ERROR_TEXT)) {
      return new InternalServerErrorMessage();
    }
    if (includesIgnoreCase(body, responseTexts.CORRECT_ANSWER_TEXT)) {
      return new CorrectAnswerMessage();
    }
    if (includesIgnoreCase(body, responseTexts.INCORRECT_ANSWER_TEXT)) {
      return new IncorrectAnswerMessage();
    }
    if (includesIgnoreCase(body, responseTexts.TOO_RECENT_ANSWER_TEXT)) {
      return new TooRecentAnswerMessage();
    }
    if (includesIgnoreCase(body, responseTexts.INCORRECT_LEVEL_TEXT)) {
      return new IncorrectLevelMessage();
    }
    if (includesIgnoreCase(body, responseTexts.HTML_RESPONSE_TEXT)) {
      return new MissingTokenMessage();
    }
    console.log(body);
    return new UnhandledMessage();
  }
}

function includesIgnoreCase(str1: string, str2: string) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

enum responseTexts {
  TOO_EARLY_REQUEST_TEXT = "please don't repeatedly request this endpoint before it unlocks",
  UNAUTHENTICATED_INPUT_TEXT = "please log in to get your puzzle input",
  INTERNAL_SERVER_ERROR_TEXT = "internal server error",
  HTML_RESPONSE_TEXT = "!DOCTYPE HTML",
  CORRECT_ANSWER_TEXT = "that's the right answer",
  INCORRECT_ANSWER_TEXT = "that's not the right answer",
  TOO_RECENT_ANSWER_TEXT = "you gave an answer too recently; you have to wait after submitting an answer before trying again.",
  INCORRECT_LEVEL_TEXT = "you don't seem to be solving the right level",
}
