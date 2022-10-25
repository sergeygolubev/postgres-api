const pool = require('./postgres')

const getAll = async (filterParams) => {
  const { rows } = await pool.query('SELECT * FROM users')
  console.log('user:', rows[0]);
  return rows[0];
};

module.exports = {
  getAll,
};
