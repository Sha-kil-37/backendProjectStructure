const express = require("express");
const testControllers = require("../controller/testController");
const router = express.Router();
//
router.get("/", testControllers.testControllerOne);
router.post("/", testControllers.testControllerTwo);
// 
module.exports = router;
