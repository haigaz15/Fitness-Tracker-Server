const errorMiddleWare = (err, req, res, next) => {
  console.log(err.stack);
  const statusCode = err.statusCode || 500;
  const message =
    statusCode === 500
      ? "Internal Server Error"
      : err.message || "Internal Server Error";

  res.status(statusCode).json({ error: { message, statusCode } });
};
module.exports = errorMiddleWare;
