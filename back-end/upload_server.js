const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/receiptDB')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|pdf/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);
        
        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Error: File type not supported!'));
    },
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Mongoose Schema
const receiptSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    storeName: { type: String },
    purchaseDate: { type: Date, required: true },
    warrantyPeriod: { type: Number },
    documentType: { type: String, required: true },
    filePath: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Receipt = mongoose.model('Receipt', receiptSchema);

// API Endpoint for upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        const { itemName, storeName, purchaseDate, warrantyPeriod, documentType } = req.body;
        
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const receipt = new Receipt({
            itemName,
            storeName,
            purchaseDate,
            warrantyPeriod: warrantyPeriod ? parseInt(warrantyPeriod) : null,
            documentType,
            filePath: req.file.path
        });

        await receipt.save();
        
        res.status(201).json({
            message: 'Receipt uploaded successfully',
            receipt: {
                id: receipt._id,
                itemName,
                storeName,
                purchaseDate,
                warrantyPeriod,
                documentType,
                filePath: req.file.path
            }
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Server error during upload' });
    }
});

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});