const {
      verifyToken,
      verifyTokenAndAuthorization,
      verifyTokenAndIsadmin,
      verifyTokenAndIssuperAdmin,

      
    } = require('../middlewares/jwtVerify.js')//sep

const express = require("express")
const router = express.Router()
const {gethelloworld} = require('../controller/helloworld.js')
router.get('/helloworld' , gethelloworld)
exports.helloworld = router