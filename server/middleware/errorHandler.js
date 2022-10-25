const errorHandler = (err, req, res, next) => {
  console.log(err);

  const error = { ...err };
  error.message = err.massage;
  if(error.name === "CastError") {
    error.message = "end Id buruu butetstei baina!";
    error.statusCode = 400;
  };
  if (error.name === "JsonWebTokenError" && error.message === "invalid token") {
    error.message = "Buruu token damjuulsan bn !";
    error.statusCode = 400;
  }
  if (error.code === 11000) {
    error.message = "Ene tailbariin utega ali hediinee bn !";
    error.statusCode = 400;
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error,
  });
};


module.exports = { errorHandler };