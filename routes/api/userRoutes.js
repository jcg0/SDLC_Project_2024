const router = require("express").Router();
const User = require("../../models/User");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      res
        .status(404)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = userData.checkAuth(req.body.password);

    if (!validPassword) {
      res
        .status(404)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session["loggedOnUserEmail"] = userData.email;
      req.session["loggedOnUserID"] = userData.id;
      req.session.logged_in = true;
      req.session = req.session;

      // res.json({ user: userData, message: "You are now logged in!" });
      res.status(200).json({ message: "Login succeeded." });
    });
  } catch (err) {
    res.status(500).json({ message: "an error occurred." });
  }
});

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
