const testMiddleware = (req, res, next) => {
  console.log("ami middleware theke bolci");
  next();
};
module.exports = testMiddleware;
