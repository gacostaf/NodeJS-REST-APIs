const express = require("express");
const app = express();

app.use("/test", (req, resp) => {
  console.log("Incoming /test request");
  resp.status(200).send("Calla perro infeliz... Ya te dije, y no repito, repito...");
});

app.listen(3000, () => {
  console.log("Ready to listen!");
});
