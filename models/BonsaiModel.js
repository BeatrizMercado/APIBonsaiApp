import { Sequelize, DataTypes, Model } from "sequelize";
import connection_db from "../database/connection_db.js";

const Bonsai = connection_db.define('bonsais', {
    // Model attributes are defined here
    specie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abonated: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    trasplanted: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    notes: {
        type: DataTypes.STRING,
        allowNull: false
      },
    images: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    // Other model options go here
  });
  
  // `sequelize.define` also returns the model
  console.log(Bonsai === connection_db.models.Bonsai); // true

  export default Bonsai