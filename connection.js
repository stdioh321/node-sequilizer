const {
  Sequelize,
  DataTypes,
  Model
} = require("sequelize");

module.exports = {
  sequelize: new Sequelize('db', 'root', 'root', {
    dialect: 'mysql',
    host: 'my_db',
    port: 3306
  })
}