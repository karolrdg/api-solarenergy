const { DataTypes } = require('sequelize');
const { connection } = require('../database/connection');
const { Unidade } = require('./unidade');

const Generation = connection.define("Generation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reference_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_generated: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  underscored: true,
  paranoid: true,
}
);

Generation.belongsTo(Unidade, {
  foreignKey: 'idUnidade',
});

module.exports = {
  Generation
};
