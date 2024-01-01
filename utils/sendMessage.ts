import { client } from "../client";

const sendMessage = (recipient: string, message: string) => {
  client.sendMessage(recipient, message);
};

export default sendMessage;
