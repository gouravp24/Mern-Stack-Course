const User = require("../models/users.models");

const createUser = async (req, res) => {
  try {
    const { name, email, mobile, age } = req.body;

    const userData = new User({ name, email, mobile, age });
    await userData.save();
    res.status(201).json({ data: userData, message: "user is created " });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ data: allUsers, message: "get all users" });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const userData = await User.findByIdAndDelete(userId);

    console.log("user deleted",userData);
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const { name, email, mobile, age } = req.body;

    await User.findByIdAndUpdate(userId, { name, email, mobile, age });

    res.status(200).json({ data: await User.findById(userId), message: "user is updated" });
  } catch (error) {
    console.log(error);
  }
};

const patchUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const { name, email, mobile, age } = req.body;

    await User.findByIdAndUpdate(userId, { name, email, mobile, age });

    res.status(200).json({ data: await User.findById(userId), message: "user is updated" });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  patchUser,
};
