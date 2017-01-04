import sequelize from '../sequelize'
import  Sequelize from 'sequelize'

const User = sequelize.define('t_user',{
  user_name: Sequelize.STRING,
  user_password: Sequelize.STRING
});

export default  User


