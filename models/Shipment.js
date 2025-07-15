const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    date: Date,
    status: String,
    quantity: Number
});

module.exports = mongoose.model('Shipment', shipmentSchema);
