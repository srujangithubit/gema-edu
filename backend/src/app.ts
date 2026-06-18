import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import enquiryRoutes from './routes/enquiry';

dotenv.config();

const app = express();

// Use environment variable for MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove-workshop';

// Allow CORS for all domains (important for Vercel deployment)
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enquiry', enquiryRoutes);

// Connect to MongoDB without blocking the server export
mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error, falling back to mock mode.', error.message);
    process.env.MOCK_DB = 'true';
  });

export default app;
