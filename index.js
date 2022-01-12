const {
  DataTypes
} = require("sequelize");
const  faker = require('faker')
const {
  sequelize
} = require("./connection");
const UserDetails = require("./UserDetails");

const queryInterface = sequelize.getQueryInterface();


(async ()=>{
  try {
    await queryInterface.createTable('user_details', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
      }
    });

    
    let newUserDetail = {
      username: faker.animal.dog() ,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      gender: faker.datatype.boolean() ? "m":"f",
      password: faker.datatype.string(12),
      status: faker.datatype.boolean() ? 1:2,
    };
    console.log("newUserDetail:", newUserDetail);
    await UserDetails.create(newUserDetail);
    let all = await UserDetails.findAll();
    console.table(all.map(it=>it.dataValues));
    console.log("DONE");
    
  } catch (error) {
    console.log("Error");
    console.log(error);
  }
  return;
  
})()