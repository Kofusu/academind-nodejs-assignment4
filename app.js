const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const usersRoute = require("./routes/users");
const errorController = require("./controllers/error")

const app = express();
const PORT = 3001;

// Set view engine and declare folder name for views
app.set("view engine", "ejs");
app.set("views", "views");

// add bodyParser middleware for form handler
app.use(bodyParser.urlencoded({ extended: false }));

// declare static folder for app
app.use(express.static("public"))

// add /users route
app.use("/users", usersRoute);

app.get("/", (req, res, _next) => {
  res
    .status(200)
    .render(path.join("home"), {
      pageTitle: "Home Page",
    });
});

// 404 page /  no route 
app.use(errorController.error404)

app.listen(PORT, () => {
  console.log(`App on http://127.0.0.1:${PORT}/`);
});
