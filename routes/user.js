const express = require("express");
const router = express.Router();
const userAuth = require("../middlewares/userAuth");

const {
  userRegister,
  userLogin,
  serializeUser,
  getLocations,
  userBooking,
  viewBookings,
} = require("../controllers/user");

router.post("/signup", async (req, res) => {
  await userRegister(req, "user", res);
});

router.post("/signup-admin", userAuth, async (req, res) => {
  await userRegister(req, "admin", res);
});

router.post("/login", async (req, res) => {
  await userLogin(req, res);
});

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  await serializeUser(req, res);
});

router.post("/search", userAuth, async (req, res) => {
  await getLocations(req, res);
});

router.put("/booking/:userId", userAuth, async (req, res) => {
  await userBooking(req, res);
});

router.get("/view-booking", userAuth, async (req, res) => {
  await viewBookings(req, res);
});

module.exports = router;
