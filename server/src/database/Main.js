const pool = require('./postgres')

const getAll = async (filterParams) => {

  const { rows } = await pool.query('SELECT * FROM users')
  console.log('user:', rows[0]);
  return rows[0];

};

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
     console.log(results.rows);
     return results.rows;
  })
}

module.exports = {
  getAll,
  getUsers,
};
