const CategoriesModel = require('../models/CategoriesModel');

const renderViewAddCategorie = (_req, resp) => {
  const error = exists = sucess = false;
  resp.render('categories/newCategorie', { error, exists, sucess });
};

const addCategorieBank = async (req, resp) => {
  let error = 'Aconteceu algo de errado ao cadastrar sua Categoria!';
  let exists = 'Sua categoria ja existe';
  let sucess = 'Cadastrado com sucesso!';

  const { title } = req.body;
  const findCategorieExists = await CategoriesModel.findCategorieBank(title);

  if (findCategorieExists.length >= 1) {
    sucess = error = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
    return;
  }

  const response = await CategoriesModel.addCategorieBank(title);
  if (response) {
    error = exists = false;
    resp.redirect('/admin/categories/list');
  } else {
    sucess = exists = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
  }
};

const listCategories = async (_req, resp) => {
  const error = false;
  const response = await CategoriesModel.listCategoriesBank();
  if (response) resp.render('categories/listCategories', { response, error });
};

const deleteCategorie = async (req, resp) => {
  const { id } = req.body;
  const error = 'Categoria pertence a um Artigo, não pode ser Excluida. Apague o artigo Primeiro.';
  const response = await CategoriesModel.listCategoriesBank();
  const deleteCateg = await CategoriesModel.deleteCategorieBank(id);

  if (!deleteCateg) return resp.render('categories/listCategories', { response, error });
  if (deleteCateg) resp.redirect('/admin/categories/list');
};

const searchCategorieID = async (req, resp) => {
  const { id } = req.params;
  const response = await CategoriesModel.searchCategorieID(id);
  if (response) return resp.render('categories/editCategorie', { response });
  resp.render('categories/editCategorie', { response });
};

const updateCategorie = async (req, resp) => {
  const { title, id } = req.body;
  const response = await CategoriesModel.updateCategorieBank(title, id);
  if (response) resp.redirect('/admin/categories/list');
};

module.exports = {
  renderViewAddCategorie,
  addCategorieBank,
  listCategories,
  deleteCategorie,
  searchCategorieID,
  updateCategorie,
};
