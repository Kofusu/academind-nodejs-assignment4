const express = require("express")
const router = express.Router()

const users = []

router.get("/", (req, res, _next) => {
  res.status(200).render("users", {pageTitle: "Users Page", users})
})

router.post("/", (req, res, _next) => {
  users.push(req.body.name)
  res.status(201).redirect("/users")
})

exports.router = router
exports.users = users