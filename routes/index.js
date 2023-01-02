const router = require('express').Router();
const CONFIG = require("../utils/config");
const { use } = require('./calculators');

// routes
// @ /api/auth
// router.use(AUTH, require('./auth'));

//User's routes
router.use(require('./user'));
router.use(require('./reachUS'));
// router.use(require('./relationshipManager'));

//File Upload route
// router.use(FILES, require('./fileupload'));

//Calculators
router.use(require('./calculators'));

//Postfolio
router.use(require('./portfolio'));

//Tax Planning
router.use(require('./taxPlanning'));

//Right Schemes
router.use(require('./rightSchemes'));

//Profile Creation/IIN
router.use(require('./profileCreationIIN'));

//Sample Route
router.get("/sample", async (req, res) => {
    try {
        return res.status(200).send("sample route");
    } catch (error) {
        return res.status(500).send("sample route");
    }
})

module.exports = router;
