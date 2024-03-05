import connection_db from "./database/connection_db.js";
import Bonsai from "./models/BonsaiModel.js";

try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  await Bonsai.sync({ force: true });
  console.log("The table for the Bonsai model was just (re)created!");

  