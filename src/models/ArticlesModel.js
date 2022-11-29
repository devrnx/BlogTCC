const slugify = require('slugify');
const connection = require('./connection');

const addArticleBank = async (title, preview, article, idCategorie) => {
  try {
    const slugifyTitle = slugify(title);
    const query = 'INSERT INTO blog.tb_article (title, article, preview, slug, id_categorie) VALUES (?, ?, ?, ?, ?)';
    const response = await connection
      .execute(query, [title, article, preview, slugifyTitle, idCategorie]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const listArticleBank = async () => {
  try {
    const query = 'SELECT b.id_article, b.title, b.slug, a.title as title_categorie FROM tb_categorie as a INNER JOIN tb_article as b USING(id_categorie) ORDER BY b.id_article ';
    const [response] = await connection.execute(query);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const deleteArticleBank = async (id) => {
  try {
    const query = 'DELETE FROM blog.tb_article WHERE id_article = ?';
    const response = await connection.execute(query, [id]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const listArticleIDBank = async (id) => {
  try {
    const query = 'SELECT * FROM blog.tb_article WHERE id_article = ?';
    const [response] = await connection.execute(query, [id]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const updateArticleBank = async (id, title, preview, article, categorieId) => {
  try {
    const slugifyTitle = slugify(title);
    const query = 'UPDATE blog.tb_article SET title = ?, preview = ?, slug = ?, article = ?, id_categorie = ? WHERE id_article = ?';
    const response = await connection
      .execute(query, [title, preview, slugifyTitle, article, categorieId, id]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addArticleBank,
  listArticleBank,
  deleteArticleBank,
  listArticleIDBank,
  updateArticleBank,
};
