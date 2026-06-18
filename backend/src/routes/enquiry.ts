import { Router } from 'express';
import { z } from 'zod';
import { Enquiry } from '../models/Enquiry';

const router = Router();

const enquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

router.post('/', async (req, res) => {
  try {
    const validatedData = enquirySchema.parse(req.body);
    
    if (process.env.MOCK_DB === 'true') {
      console.log('Mock saving enquiry:', validatedData);
      return res.status(201).json({ success: true, message: "Enquiry submitted successfully (Mock)", data: { _id: 'mock_id', ...validatedData } });
    }

    // Save to DB
    const enquiry = new Enquiry(validatedData);
    await enquiry.save();

    res.status(201).json({ success: true, message: "Enquiry submitted successfully", data: enquiry });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: error.issues });
    } else {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  }
});

export default router;
