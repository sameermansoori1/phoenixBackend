const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Shipment = require('../models/Shipment');

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.deleteMany();
    await Shipment.deleteMany();

    const hashedPassword = await bcrypt.hash('password123', 10);

    const user = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword,
      patientId: 'P123456',
      currentPlan: 'Monthly',
      nextDeliveryDate: new Date('2025-07-30'),
      remainingMedication: 20,
      status: 'active'
    });

    const shipments = [
      { userId: user._id, date: new Date('2025-06-15'), status: 'Delivered', quantity: 30 },
      { userId: user._id, date: new Date('2025-06-30'), status: 'Delivered', quantity: 20 },
      { userId: user._id, date: new Date('2025-07-10'), status: 'Pending', quantity: 20 }
    ];

    await Shipment.insertMany(shipments);

    console.log('Sample data inserted');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
