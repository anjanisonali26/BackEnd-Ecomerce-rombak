const Customer = require("../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class customerController {
  // Create Customer
  static register(req, res, next) {
    const { email, password, name, role } = req.body;
    Customer.create({ email, password, name, role })
      .then((user) => {
        res.status(200).json({ success: true, data: user });
      })
      .catch(next);
  }

  // Login customer
  static login(req, res, next) {
    const { email, password } = req.body;
    Customer.findOne({ email })
      .then((customer) => {
        if (customer && bcrypt.compareSync(password, customer.password)) {
          const access_token = jwt.sign({ _id: customer._id }, "SONALI");
          res
            .status(200)
            .json({ success: true, access_token, customer: customer._id });
        } else throw { name: "LOGIN_FAILED" };
      })
      .catch((e) => {
        next({ name: "NOT_FOUND" });
      });
  }

  // get

  static async getCustomer(req, res, next) {
    try {
      const getCustomer = await Customer.findById(req._userId);
      res.status(200).send({ success: true, data: getCustomer });
    } catch (e) {
      next({ name: "NOT_FOUND" });
    }
  }

  // update
  static async updateCustomer(req, res, next) {
    const { name, password, firstname, lastname, address, age } = req.body;
    const salt = bcrypt.genSaltSync(10);
    try {
      const newData = { name, password, firstname, lastname, address, age };
      if (password)
        newData.password = await bcrypt.hashSync(newData.password, salt);
      for (let key in newData) if (!newData[key]) delete newData[key];
      const updateCustomer = await Customer.findByIdAndUpdate(req._userId, newData, {
        new: true,
      });
      res.status(200).json({ success: true, data: updateCustomer});
    } catch (e) {
      next({ name: "NOT_FOUND" });
    }
  }
}

module.exports = customerController
