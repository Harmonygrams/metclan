const { model, Schema } = require("mongoose");
const emailSchema = new Schema({
  email: { type: String, required: true },
});
const Email = model("Email", emailSchema);
module.exports = Email;
