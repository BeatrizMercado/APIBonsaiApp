import connection_db from "./database/connection_db.js";
import BonsaiModel from "./models/BonsaiModel.js";
import express from "express";
import { PORT } from './config.js'

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, esta es una Api básica');
});

try {
    await connection_db.authenticate();
    console.log('Connection has been established successfully.');
    await BonsaiModel.sync();
    console.log("The table for the Bonsai model was just (re)created!");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.listen(PORT, () => {
    console.log(`Server up in http://localhost:${PORT}`);
  });