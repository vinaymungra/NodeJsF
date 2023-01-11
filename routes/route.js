const express=require('express')

const router =express.Router()

const controller=require('../controllers/controller')

// router.get('/route',controller.ctrFun)
router.get('/',controller.ctrFun)

module.exports=router;







