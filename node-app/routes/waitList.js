const router = require("express").Router();
const emailValidator = require("email-validator");
const Email = require("../model/email.model");
router.post("/join-waitlist", async (req, res, next) => {
  const { email } = req.body;
  const newEmail = new Email({
    email: email,
  });
  if (!emailValidator.validate(email)) {
    return res.status(400).json({ success: false, message: "Invalid email" });
  }
  try {
    newEmail.save();
    res
      .status(201)
      .json({ success: true, message: "Email saved successfully" });
  } catch (err) {
    res.status(401).json({ success: false });
  }
});
module.exports = router;
