const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    patientId: String,
    currentPlan: String,
    nextDeliveryDate: Date,
    remainingMedication: Number,
    status: String
});

module.exports = mongoose.model('User', userSchema);
