module.exports = (fn) => {
  const result = (req, res, next) => {
    // fn(req, res, next).catch((err) => next(err));
    fn(req, res, next).catch(next);
    // the error will be catched by the global error handler.
  };

  return result;
};
