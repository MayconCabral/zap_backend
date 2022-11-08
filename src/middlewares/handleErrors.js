const handleError = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ error: err.msg })
  }

  return res.status(500).json({ error: `Ups! Something went wrong... Don't worry, we gonna fix it soon!`})
};

module.exports = handleError;
