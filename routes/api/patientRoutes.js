const router = require("express").Router();
const Patient = require("../../models/Patient");

router.get("/", async (req, res) => {
  try {
    const patientData = await Patient.findAll();

    if (!patientData) {
      res.status(400).json({ message: "No Patients found" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const patientData = await Product.findByPk(req.params.id);

    if (!patientData) {
      res.status(400).json({ message: "There is no patient with that ID." });
      return;
    }

    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const patientData = await Patient.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      gender: req.body.gender,
      address: req.body.address,
      medications: req.body.medications,
      medical_history: req.body.medical_history,
      family_medical_history: req.body.family_medical_history,
      contacts: req.body.contacts,
      emergency_contacts: req.body.emergency_contacts,
      insurance_info: req.body.insurance_info,
    });
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
