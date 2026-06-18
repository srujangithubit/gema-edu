import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import enquiryRoutes from './routes/enquiry';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove-workshop';

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enquiry', enquiryRoutes);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error, falling back to mock mode.', error.message);
    process.env.MOCK_DB = 'true';
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
