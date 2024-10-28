const sequelize = require("../config/connection");
const { Patient } = require("../models");

const patientData = require("./patientData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Patient.bulkCreate(patientData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
