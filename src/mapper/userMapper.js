import  sequelize from './sequelize'
import  Sequelize from 'sequelize'

const UserMapper = sequelize.define('t_user', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: Sequelize.STRING, allowNull: false, field: "user_name"},
  password: {type: Sequelize.STRING, allowNull: false, field: "user_password"},
  createdAt: {type: Sequelize.DATE, allowNull: false, field: "createdAt", defaultValue: Sequelize.NOW},
  updatedAt: {type: Sequelize.DATE, allowNull: false, field: "updatedAt", defaultValue: Sequelize.NOW},
});

export default  UserMapper


