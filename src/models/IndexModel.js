const connection = require('./connection');

const listArticleBank = async () => {
  try {
    const query = 'SELECT * FROM blog.tb_article ORDER BY id_article DESC LIMIT 5';
    const [response] = await connection.execute(query);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const listArticleIDBank = async (slug) => {
  try {
    const query = 'SELECT * FROM blog.tb_article where slug = ?';
    const [response] = await connection.execute(query, [slug]);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const listArticlesByCategoryBank = async (id) => {
  try {
    const query = 'SELECT b.title, b.slug, b.article, b.preview, b.created_at, a.title as title_categorie FROM blog.tb_categorie as a INNER JOIN blog.tb_article as b USING(id_categorie) WHERE a.id_categorie = ?';
    const [response] = await connection.execute(query, [id]);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const listArticlesNumBank = async (num) => {
  try {
    const quanty = 5;
    const offSet = num * 5;
    const query = `SELECT * FROM blog.tb_article ORDER BY id_article DESC LIMIT ${quanty} OFFSET ${offSet}`;
    const [response] = await connection.execute(query);
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  listArticleBank,
  listArticleIDBank,
  listArticlesByCategoryBank,
  listArticlesNumBank,
};
