const asynchandler = (requestHandler) => {
  return (req, res, nxt) => {
    Promise.resolve(requestHandler(req, res, nxt)).catch((err) => nxt(err));
  };
};
export default asynchandler;
