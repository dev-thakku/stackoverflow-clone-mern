const express = require('express');
require('dotenv').config();

const connectDB = require('./config/dbConfig');
const { errorHandler } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`App running on port ${port}`));
