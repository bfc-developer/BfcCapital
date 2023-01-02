const router = require('express').Router();


//routes
const CONFIG = require("../utils/config");
const {
    PURCHASE,
} = CONFIG.ROUTES

//controllers rightScheme LumpSum
const {
    PurchaseLumpSum
} = require('../controller/getRightSchemeLumpSum');

//controllers rightScheme SIP
const {
    getBasketList
} = require('../controller/getRightSchemeSIP');

//token verify middleware
// const { verifyToken } = require('../middleware/token');

//PURCHASE_LUMPSUM
router.post(PURCHASE, PurchaseLumpSum);

module.exports = router;
