const router = require("express").Router();
const userRoutes = require("./userRoutes");
const patientRoutes = require("./patientRoutes");

router.use("/user", userRoutes);
router.use("/patient", patientRoutes);

module.exports = router;
