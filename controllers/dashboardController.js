const User = require('../models/User');

const getDashboard = async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json({
        fullName: user.name,
        patientId: user.patientId,
        currentPlan: user.currentPlan,
        nextDeliveryDate: user.nextDeliveryDate,
        remainingMedication: user.remainingMedication,
        status: user.status
    });
};

module.exports = { getDashboard };
