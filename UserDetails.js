const {Sequelize,DataTypes,Model} =  require("sequelize");
const {sequelize} = require("./connection");

class UserDetails extends Model {}

UserDetails.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  username: {
    type: DataTypes.STRING
  },
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'UserDetails', // We need to choose the model name
  tableName: 'user_details',
  timestamps: false
});

module.exports = UserDetails;