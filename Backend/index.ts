import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import NewsLetter from './Models/Newsletter'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI as string);
    console.log('✅ Database Connected Successfully');
  } catch (err) {
    console.error('❌ Database connection error:', err);
    process.exit(1);
  }
};

app.post("/api/newsletter", async (req: Request, res: Response): Promise<any> => {
  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const exists = await NewsLetter.findOne({ email });
    if (exists) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }

    const subscription = new NewsLetter({ email });
    await subscription.save();

    res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
connect();
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
