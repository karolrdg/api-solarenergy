const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const { Unidade } = require("./unidade");

const Generation = connection.define(
  "Generation",
  {
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "unidades",
        },
        key: "id",
      },
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reference_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_generated: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    paranoid: true,
  }
);

Generation.belongsTo(Unidade, {
  foreignKey: "created_by",
});

module.exports = {
  Generation,
};
