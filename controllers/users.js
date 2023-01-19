const User = require("../models/user")

exports.getUsers = (_req, res, _next) => {
  User.getUser((users => {
    res.status(200).render("users", {pageTitle: "Users Page", users})
  }))
}

exports.addUsers = (req, res, _next) => {
  const user = new User(req.body.name)
  user.addUser()
  res.status(201).redirect("/users")
}