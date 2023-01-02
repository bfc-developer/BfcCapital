const router = require('express').Router();


//routes
const CONFIG = require("../utils/config");
const {
    GET_BASKET_LIST,
    PRODUCT_VIA_ISIN,
    AMC_LIST,
    MANDATE_LIST,
    GET_BANK_LIST,
    INSERT_TRANSACTION_DETAILS,
    MULTI_PURCHASE_SIP,
    DELETE_TRANSACTION_DETAILS,
    SAVE_TRANSACTION_DETAILS
} = CONFIG.ROUTES

//controllers
const {
    getBasketList,
    product_via_ISIN,
    AMCList,
    MandateList,
    BankList,
    InsertTransactionDetails,
    MultiPurchaseSIP,
    DeleteTransactionDetails,
    SaveTransactionDetails
} = require('../controller/taxPlanning');

//token verify middleware
// const { verifyToken } = require('../middleware/token');

//GET_BASKET_LIST
router.post(GET_BASKET_LIST, getBasketList);

//PRODUCT_VIA_ISIN
router.post(PRODUCT_VIA_ISIN, product_via_ISIN);

//AMC_LIST
router.post(AMC_LIST, AMCList);

//MANDATE_LIST
router.post(MANDATE_LIST, MandateList);

//GET_BANK_LIST
router.post(GET_BANK_LIST, BankList);

//INSERT_TRANSACTION_DETAILS
router.post(INSERT_TRANSACTION_DETAILS, InsertTransactionDetails);

//MULTI_PURCHASE_SIP
router.post(MULTI_PURCHASE_SIP, MultiPurchaseSIP);

//DELETE_TRANSACTION_DETAILS
router.post(DELETE_TRANSACTION_DETAILS, DeleteTransactionDetails);

//SAVE_TRANSACTION_DETAILS
router.post(SAVE_TRANSACTION_DETAILS, SaveTransactionDetails);

module.exports = router;
