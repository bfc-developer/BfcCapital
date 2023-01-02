const router = require('express').Router();


//routes
const CONFIG = require("../utils/config");
const {
    SIPROUTE,
    ELSSROUTE,
    EMIROUTE,
    FD,
    LUMPSUM,
    MARRIAGE,
    EDUCATION,
    RETIREMENT
} = CONFIG.ROUTES

//controllers
const {
    SipCalculator,
    ELSSCalculator,
    EMICalculator,
    LumpSumCalculator,
    FDCalculator,
    MarrigeCalculator,
    EducationCalculator,
    RetirmentCalculator
} = require('../controller/calculators');

//token verify middleware
// const { verifyToken } = require('../middleware/token');

//SIP Route
router.post(SIPROUTE, SipCalculator);

//ELSS ROUTE
router.post(ELSSROUTE, ELSSCalculator);

//EMI ROUTE
router.post(EMIROUTE, EMICalculator);

//LUMPSUM ROUTE
router.post(LUMPSUM, LumpSumCalculator);

//FD ROUTE
router.post(FD, FDCalculator);

//MARRIAGE ROUTE
router.post(MARRIAGE, MarrigeCalculator);

//EDUCATION ROUTE
router.post(EDUCATION, EducationCalculator);

//RETIREMENT ROUTE
router.post(RETIREMENT, RetirmentCalculator);


module.exports = router;
