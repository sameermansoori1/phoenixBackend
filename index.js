const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});

console.log('authRoutes:', typeof authRoutes);
console.log('dashboardRoutes:', typeof dashboardRoutes);
console.log('shipmentRoutes:', typeof shipmentRoutes);

app.use('/login', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/shipments', shipmentRoutes);
