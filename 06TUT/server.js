const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.get("^/$|/index(.html)?", (req, res) => {
  // res.send("Hello World!");
  //res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});
app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 By Default
});

// ROUTE HANDLERS
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("Attempted To Load Hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello Page");
  }
);

// CHAINING ROUTE HANDLERS

const one = (req, res, next) => {
  console.log("ONE");
  next();
};
const two = (req, res, next) => {
  console.log("TWO");
  next();
};
const three = (req, res) => {
  console.log("THREE");
  res.send("FINISHED!!!");
};

app.get("/chain(.html)?", [one, two, three]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server Is Running On Port ${PORT}`));
