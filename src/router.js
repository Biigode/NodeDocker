const express = require("express");
const router = express.Router();
const user = require("./controllers/cliente");

router.get("/show", user.show);
router.post("/store", user.store);

module.exports = router;
