const express = require("express");
const router = express.Router();
const {check} = require("express-validator")
const auth = require('../../middleware/auth')
const {getUser,loginUser,allUsers} = require("../../controllers/user")

router.route("/").get(auth,getUser).post(loginUser)
router.route("/all").get(allUsers)

module.exports = router