const { Model, Datatypes } = require('sequelize');
const bcrypt = require(bcrypt);
const sequelize = require('../config/connection');

class User extends Model {
  // checkAuth(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}