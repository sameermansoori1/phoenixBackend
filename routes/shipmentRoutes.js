const router = require('express').Router();
const { getShipments } = require('../controllers/shipmentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getShipments);

module.exports = router;
