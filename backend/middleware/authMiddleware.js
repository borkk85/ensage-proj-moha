const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Admin = require("../model/adminModel");
const base64 = require('base-64')

const protect = asyncHandler(async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const [email, password] = base64.decode(authorization.split(" ")[1]).split(":");

  const admin = await Admin.findOne({ email });
  if (!admin) {
    res.status(401);
    throw new Error("Not authorized");
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Not authorized");
  }

  req.admin = admin;
  next();
});

module.exports = { protect };
