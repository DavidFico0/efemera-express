let express = require('express');
let router = express.Router();
let homeController = require('../controller/homeController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', homeController.index);


module.exports = router;
