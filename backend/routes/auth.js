const express = require("express");
//var app=express();
const router = express.Router({ mergeParams: true });
const authService = require("../Services/auth");
const transcationService = require("../Services/transcation");
const festivalcalservice = require("../Services/festivalcal");
/* User Registration. *///
router.post("/register", authService.register);


/* User Login. */
router.post("/login", authService.login);
router.get("/member", authService.member);
router.post("/createtrans" ,transcationService.createTranscation);
router.post("/updatetrans" ,transcationService.updateTranscation);
router.post("/createFestival" ,festivalcalservice.createfestivalcal);

router.get("/getAllTrans" ,transcationService.getAllTranscation);
router.get("/findmember/" ,authService.getCurrentUser);
router.get("/getAllFestival",festivalcalservice.getAllfestivalcal );


module.exports = router;
