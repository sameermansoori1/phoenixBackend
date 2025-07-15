const Shipment = require('../models/Shipment');

const getShipments = async (req, res) => {
    const shipments = await Shipment.find({ userId: req.user.id });
    res.json(shipments);
};

module.exports = { getShipments };
