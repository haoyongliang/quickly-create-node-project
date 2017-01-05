import sequelize from '../sequelize'
import  Sequelize from 'sequelize'

const User = sequelize.define('t_user', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: Sequelize.STRING, allowNull: false, field: "user_name"},
  password: {type: Sequelize.STRING, allowNull: false, field: "user_password"},
});

export default  User


