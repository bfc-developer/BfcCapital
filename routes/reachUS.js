const router = require('express').Router();
const {userData} = require('../controller/VertualRelationManager');
const {RelationshipManager} = require('../controller/relationshipManager');
const {WealthManager} = require('../controller/wealthManager');
const {ContactUs} = require('../controller/contactUs');


router.post("/vertual-relation-manager", userData);
router.post("/relationship-manager", RelationshipManager);
router.post("/wealth-manager",WealthManager);
router.post("/contact-us", ContactUs);


module.exports = router;