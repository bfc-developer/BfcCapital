const router = require('express').Router();


//routes
const CONFIG = require("../utils/config");
const {
    PAN_VERIFY,
    GET_IIN,
    GET_OCCUPATIONS,
    GET_INCOME,
    ACCOUNT_TYPE,
    BANK_LIST,
    GET_COUNTRY,
    GET_RELATIONSHIP_MASTER,
    STATE_BY_PINCODE,
    ADDITIONAL_IIN_PERSONAL_DETAILS,
    ADDITIONAL_IIN_ADDRESS_DETAILS,
    ADDITIONAL_IIN_DECLARATION_JOURNEY_PC,
    ADDITIONAL_IIN_GET_NOMINEE,
    ADDITIONAL_IIN_CREATE
} = CONFIG.ROUTES

//controllers
const {
    profileCreationIIN,
    getIIN,
    getoccupations,
    getIncome,
    getCountry,
    bankList,
    accountType,
    getRelationshipMaster,
    statByPINCode,
    additionalIINPersonalDetails,
    additionalIINAddressDetails,
    additionalIINDeclarationJoiurneyPC,
    additionalIINgetNominee,
    additionalIICreate
} = require('../controller/profileCreationIIN');

//token verify middleware
// const { verifyToken } = require('../middleware/token');

//VERIFY_PAN
router.post(PAN_VERIFY, profileCreationIIN);

//GET_IIN
router.post(GET_IIN, getIIN);

//GET_OCCUPATIONS
router.post(GET_OCCUPATIONS, getoccupations);

//GET_INCOME
router.post(GET_INCOME, getIncome);

//ACCOUNT_TYPE
router.post(ACCOUNT_TYPE, accountType);

//BANK_LIST
router.post(BANK_LIST, bankList);

//GET_COUNTRY
router.post(GET_COUNTRY, getCountry);

//GET_RELATIONSHIP_MASTER
router.post(GET_RELATIONSHIP_MASTER, getRelationshipMaster);

//STATE_BY_PINCODE
router.post(STATE_BY_PINCODE, statByPINCode);

//ADDITIONAL_IIN_DETAILS
router.post(ADDITIONAL_IIN_PERSONAL_DETAILS, additionalIINPersonalDetails);

//ADDITIONAL_IIN_DETAILS
router.post(ADDITIONAL_IIN_ADDRESS_DETAILS, additionalIINAddressDetails);

//ADDITIONAL_IIN_DECLARATION_JOURNEY_PC
router.post(ADDITIONAL_IIN_DECLARATION_JOURNEY_PC, additionalIINDeclarationJoiurneyPC);

//ADDITIONAL_IIN_GET_NOMINEE
router.post(ADDITIONAL_IIN_GET_NOMINEE, additionalIINgetNominee);

//ADDITIONAL_IIN_CREATE
router.post(ADDITIONAL_IIN_CREATE, additionalIICreate);

module.exports = router;
