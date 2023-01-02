const router = require('express').Router();


//routes
const CONFIG = require("../utils/config");
const {
    SNAPSHOT,
    PORTFOLIO_API_DATA,
    PORTFOLIO,
    USER_PROFILE_MEMBERLIST,
    GET_IIN_STATUS,
    GET_IIN_DETAILS_WMS,
    PORTFOLIO_DETAIL_API
} = CONFIG.ROUTES

//controllers
const {
    Snapshot,
    PortfolioData,
    portfolio,
    UserMemberList,
    getIINStatus,
    IINDetailsWMS,
    portfolioDetailAPI
} = require('../controller/portfolio');

//token verify middleware
// const { verifyToken } = require('../middleware/token');

//SNAPSHOT
router.post(SNAPSHOT, Snapshot);

//PORTFOLIO_API_DATA
router.post(PORTFOLIO_API_DATA, PortfolioData);

//PORTFOLIO
router.post(PORTFOLIO, portfolio);

//USER_PROFILE_MEMBERLIST
router.post(USER_PROFILE_MEMBERLIST, UserMemberList);

//GET_IIN_STATUS
router.post(GET_IIN_STATUS, getIINStatus);

//GET_IIN_DETAILS_WMS
router.post(GET_IIN_DETAILS_WMS, IINDetailsWMS);

//PORTFOLIO_DETAIL_API
router.post(PORTFOLIO_DETAIL_API, portfolioDetailAPI);


module.exports = router;
