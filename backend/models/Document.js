import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  storeName: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  warrantyPeriod: {
    type: Number, // in months
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  documentType: {
    type: String, // e.g., 'bill', 'warranty', 'receipt'
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  publicId: {
    type: String // for Cloudinary
  }
}, {
  timestamps: true
});

export default mongoose.model('Document', documentSchema);
