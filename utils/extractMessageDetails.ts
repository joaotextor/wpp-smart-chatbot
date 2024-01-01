import { TMessage } from "./types";

export type ExtractedDetails = {
  fromName: string;
  fromNumber: string;
  chatType: string;
  message: string;
};

const extractMessageDetails = (incomingMessage: TMessage): ExtractedDetails => {
  const {
    notifyName: fromName,
    from: fromNumber,
    type: chatType,
    body: message,
  } = incomingMessage._data;

  const extractedDetails: ExtractedDetails = {
    fromName,
    fromNumber,
    chatType,
    message,
  };

  return extractedDetails;
};
