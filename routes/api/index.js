const router = require('express').Router();
const dbController = require('../../controllers/dbController');

//localhost:3000/api
router.route('/')
        .get(dbController.test)

router.route('/runpy')
        .get(dbController.runpy)
module.exports = router;
           