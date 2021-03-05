const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "customer",
  },
  age: {
    type: String,
    default: null,
  },
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
});

customerSchema.pre("save", function (next) {
  Customer.findOne({ email: this.email })
    .then((customer) => {
      if (customer) next({ name: "ALREADY_EXISTS" });
      else {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
        next();
      }
    })
    .catch((err) => next({ name: "MONGOOSE_ERROR" }));
});
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
