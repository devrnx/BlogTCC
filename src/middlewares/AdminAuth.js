const authentication = (req, resp, next) => {
  if (!req.session.user) {
    return resp.redirect('/admin/login');
  }
  next();
};

module.exports = authentication;
