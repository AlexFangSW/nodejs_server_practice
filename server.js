// Setup ----------------------------------
const express = require("express");
const app = express();
const IP = "127.0.0.1";
const PORT = 8080;

// Static Files  ----------------------------------
app.use(express.static("public"));
// Simplify dir name (Used across all files) : Help us easily access statics files such as css, js...
app.set("css", express.static(__dirname + "public/css"));
app.set("js", express.static(__dirname + "public/js"));
// For render
app.set("view engine", "ejs");

// Navigation ----------------------------------
// Static files
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// EJS Files
app.get("/ejstest", (req, res) => {
  res.render("ejstest", { some_text: "EJS Test" });
});

// Listen ----------------------------------
app.listen(PORT, IP, () => {
  console.log(`Listening on ${IP}:${PORT}...`);
});

// // For Heroku
// app.listen(process.env.PORT);
