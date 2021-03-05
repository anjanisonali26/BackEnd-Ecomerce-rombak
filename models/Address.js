const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  village: { type: String },
  district: { type: String },
  city: { type: String },
  province: { type: String },
  country: { type: String },
  phone: { type: Number, minlength: 8 },
  zip: { type: Number },
});


const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
