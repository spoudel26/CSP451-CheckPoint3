const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from CSP451" });
});

// BROKEN /health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", uptime: process.uptime() }); // remove closing brace to break
// MISSING CLOSING BRACE AND PARENTHESIS

module.exports     = app;

if (require.mai   n === module) {
  const port      = process.env.PORT || 3000;
  app       .listen(port, () => console.log(`Listening on ${port}`));
}
