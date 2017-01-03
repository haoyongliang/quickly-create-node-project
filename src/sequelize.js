import Sequelize from "sequelize"
import Config from './config'

const sequelize = new Sequelize(Config.DB_DATABASE, Config.DB_USER, Config.DB_PASSWORD,{
  host: Config.DB_HOST,
  dialect: Config.DB_DIALECT
});

export default sequelize
