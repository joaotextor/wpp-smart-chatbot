import { client } from "./client";

client.initialize();
client.on("ready", () => {
  console.log("Bot rodando!");
});
client.on("message", (message) => {
  console.log(message);
});
