const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_URI, {
  dialect: 'mysql',
  logging: false
});

const User = require('./user')(sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { sequelize, User };
