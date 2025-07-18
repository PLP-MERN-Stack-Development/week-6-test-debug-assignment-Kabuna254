const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bugRoutes = require('./routes/bugRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', bugRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on 5000')))
  .catch(console.error);

module.exports = app;
