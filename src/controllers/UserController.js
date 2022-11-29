const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');

const viewCreateUser = (_req, resp) => {
  const error = false;
  resp.render('user/createUser', { error });
};

const createUser = async (req, resp) => {
  const { name, email, password } = req.body;
  const error = 'Email informado ja existe';

  const userExists = await UserModel.verifyUserBank(email);
  if (userExists.length >= 1) return resp.render('user/createUser', { error });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const response = await UserModel.createNewUserBank(name, email, hash);
  if (response) return resp.redirect('/admin/list/users');
};

const listUsers = async (req, resp) => {
  const response = await UserModel.listUsersBank();

  if (response) return resp.render('user/listUsers', { response });
};

const deleteUser = async (req, resp) => {
  const { id } = req.body;
  const response = await UserModel.deleteUserBank(id);
  if (response) return resp.redirect('/admin/list/users');
};

const searchUserId = async (req, resp) => {
  const { id } = req.params;
  const error = false;
  const [response] = await UserModel.searchUserIdBank(id);

  if (response) return resp.render('user/editUserView', { response, error });
  return resp.render('user/editUserView', { response, error });
};

const editUser = async (req, resp) => {
  const {
    name, email, id, passwordOld, passwordNew,
  } = req.body;

  const [response] = await UserModel.searchUserIdBank(id);

  const { password } = response;

  const validPasswordOld = bcrypt.compareSync(passwordOld, password);
  if (validPasswordOld) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(passwordNew, salt);

    const userUpdate = await UserModel.updateUserBank(name, email, hash, id);
    if (userUpdate) return resp.redirect('/admin/list/users');
  } else {
    const error = 'Senha antiga não confere';
    return resp.render('user/editUserView', { response, error });
  }
};

module.exports = {
  listUsers,
  viewCreateUser,
  createUser,
  deleteUser,
  searchUserId,
  editUser,
};