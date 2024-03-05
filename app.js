import connection_db from "./database/connection_db.js";
import BonsaiModel from "./models/BonsaiModel.js";

try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.');
    await BonsaiModel.sync();
    console.log("The table for the Bonsai model was just (re)created!");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  