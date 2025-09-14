const express = require("express");

const {
  getAllUsers,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-user", updateUser);
router.delete("/delete-user", deleteUser);
router.patch("/patch-user", patchUser);
module.exports = router;
