const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const Admin = require("../model/adminModel");

// Register new admin
// @route Post

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const admin = await Admin.findOne({email})

    if(admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
        })
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }

});

// Authenticate new user
//@route Post

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  const adminCount = await Admin.countDocuments();
  if (adminCount === 2) {
    res.status(400);
    throw new Error("Admin users slots are filled");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  if (admin) {
    res.status(201).json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await Admin.findById(req.admin.id)

  res.status(200).json({
    id: _id,
    name,
    email,
  });

});

module.exports = {
  registerAdmin,
  loginAdmin,
  getMe,
};
