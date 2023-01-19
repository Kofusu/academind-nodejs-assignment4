const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const usersRoute = require("./routes/users");

const app = express();
const PORT = 3001;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"))

app.use("/users", usersRoute.router);

app.get("/", (req, res, _next) => {
  res
    .status(200)
    .render(path.join("home"), {
      pageTitle: "Home Page",
    });
});

app.listen(PORT, () => {
  console.log(`App on http://127.0.0.1:${PORT}/`);
});
