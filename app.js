import connection_db from "./database/connection_db.js";
import BonsaiModel from "./models/BonsaiModel.js";
import express from "express";
import { PORT } from './config.js';
import BonsaiRouter from './routes/BonsaiRouter.js'

const app = express();

app.use(express.json());
app.use("/api", BonsaiRouter); //aqui decido como se va a llamar mi direccion url/api//


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

  