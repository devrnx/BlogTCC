const slugify = require('slugify');
const connection = require('./connection');

const addCategorieBank = async (title) => {
  try {
    const slugTitle = slugify(title);
    const query = 'INSERT INTO blog.tb_categorie (title, slug) VALUES (?, ?)';
    const response = await connection.execute(query, [title, slugTitle]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const findCategorieBank = async (title) => {
  try {
    const query = `SELECT * FROM blog.tb_categorie WHERE title LIKE '%${title}%'`;
    const [response] = await connection.execute(query, [title]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const listCategoriesBank = async () => {
  try {
    const query = 'SELECT * FROM blog.tb_categorie';
    const [response] = await connection.execute(query);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const deleteCategorieBank = async (id) => {
  try {
    const query = 'DELETE FROM blog.tb_categorie WHERE id_categorie = ?';
    const response = await connection.execute(query, [id]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const searchCategorieID = async (id) => {
  try {
    const query = 'SELECT * FROM blog.tb_categorie WHERE id_categorie = ?';
    const [response] = await connection.execute(query, [id]);
    return response[0];
  } catch (err) {
    console.error(err);
  }
};

const updateCategorieBank = async (title, id) => {
  try {
    const slugTitle = slugify(title);
    const query = 'UPDATE blog.tb_categorie SET title = ?, slug= ? WHERE id_categorie = ?';
    const [response] = await connection.execute(query, [title, slugTitle, id]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addCategorieBank,
  findCategorieBank,
  listCategoriesBank,
  deleteCategorieBank,
  searchCategorieID,
  updateCategorieBank,
};
