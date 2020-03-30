const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', homeController.index);

router.post('/newsletter', homeController.newsletter);

router.post('/contato', homeController.contato);

router.get('/listacontatos', homeController.listarContatos);


module.exports = router;
