import { Sequelize, DataTypes, Model } from "sequelize";

const Bonsai = sequelize.define('bonsais', {
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
  console.log(Bonsai === sequelize.models.Bonsai); // true

  export default Bonsai