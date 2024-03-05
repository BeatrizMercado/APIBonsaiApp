import { Sequelize } from "sequelize";
import {DB_NAME, DB_PASS, DB_USER} from '../config.js'

const connection_db = new Sequelize( DB_NAME , DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default connection_db;