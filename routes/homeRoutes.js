const router = require("express").Router();
const { User, Patient } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/welcome", async (req, res) => {
//   try {
//     res.render("welcome");
//   } catch (err) {
//     res.status(500).json({ message: "An error occurred" });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     res.render("welcome");
//   } catch (err) {
//     res.status(500).json({
//       message:
//         "An error occurred, please try again. If problem persists, contact us",
//     });
//   }
// });

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("/public/HTML/welcome.html", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/public/HTML/main.html");
//     return;
//   }

//   res.render("login");
// });

router.get("/login", async (req, res) => {
  res.render("login");
});

// router.get('/patient', (req, res) => {
//   Patient.findAll().then((patientData) => {

//   })
// })

module.exports = router;
