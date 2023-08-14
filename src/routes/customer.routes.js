const Router = require('express');
const router = Router();
const { getCustomer, addCustomer, home } = require('../controllers/customer.controller');

router.get('/api/clientes', getCustomer);
router.get('/', home);
router.post('/', addCustomer);

module.exports = router;
