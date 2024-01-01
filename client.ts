import { Client } from "whatsapp-web.js";
const qrcode = require("qrcode-terminal");

export const client = new Client({});
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
