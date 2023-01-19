exports.error404 = (_req, res, _next) => {
  res.status(404).render("404")
}