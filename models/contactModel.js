const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    phone: {
      type: String,
      required: [true, "Please Add a phone number"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Contact", contactSchema);
