import mongoose, { Schema, Document, model } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  subscribedAt: Date;
}

const NewsletterSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter = model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;
