const router = require('express').Router();
//routes
const CONFIG = require("../utils/config");
const {
    USER_LOGIN,
    USER_REGISTER,
    RESET_PASSWORD,
    FORGOT_PASSWORD,
    USER_PROFILE
} = CONFIG.ROUTES

//controllers
const {
    userLogin,
    userRegister,
    forgotPassword,
    resetPassword,
    userProfile
} = require('../controller/user');



//User Register
router.post(USER_LOGIN, userLogin);

//User Login
router.post(USER_REGISTER, userRegister);

//Forgot Password
router.post(FORGOT_PASSWORD, forgotPassword);

//Reset Password
router.post(RESET_PASSWORD, resetPassword);

//User Profile
router.post(USER_PROFILE, userProfile);

module.exports = router;