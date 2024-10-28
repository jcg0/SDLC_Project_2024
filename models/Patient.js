const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Patient extends Model {}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    medications: {
      type: DataTypes.STRING,
    },
    medical_history: {
      type: DataTypes.STRING,
    },
    family_medical_history: {
      type: DataTypes.STRING,
    },
    contacts: {
      type: DataTypes.STRING,
    },
    emergency_contacts: {
      type: DataTypes.STRING,
    },
    insurance_info: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "patient",
  }
);

module.exports = Patient;
