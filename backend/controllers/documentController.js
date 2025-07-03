import Document from '../models/Document.js';
import cloudinary from '../utils/cloudinary.js'; // handles file uploads
import mongoose from 'mongoose';

// Upload a new document
export const uploadDocument = async (req, res) => {
  try {
    const {
      itemName,
      storeName,
      purchaseDate,
      warrantyPeriod,
      expiryDate,
      documentType,
      description 
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'smart-bill-manager'
    });

    const newDocument = new Document({
      user: req.user._id, // assumes auth middleware sets req.user
      itemName,
      storeName,
      purchaseDate,
      warrantyPeriod,
      expiryDate,
      documentType,
      description,
      fileUrl: result.secure_url,
      publicId: result.public_id
    });

    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: 'Upload failed', error });
  }
};

// Get all documents for the logged-in user
export const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents', error });
  }
};

// Get document(s) by type
export const getDocumentsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const docs = await Document.find({ user: req.user._id, documentType: type });
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents by type', error });
  }
};

// Get a document by ID
export const getDocumentById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("Invalid document ID:", id);
    return res.status(400).json({ message: 'Invalid document ID' });
  }

  try {
    console.log("Fetching document by ID:", id, "for user:", req.user._id);

    const doc = await Document.findOne({ _id: id, user: req.user._id });
    console.log("Document found:", doc);

    if (!doc) {
      console.log("Document not found or does not belong to user");
      return res.status(404).json({ message: 'Document not found' });
    }

    res.status(200).json(doc);
  } catch (error) {
    console.error("Error fetching document by ID:", error);
    res.status(500).json({ message: 'Error fetching document by ID', error });
  }
};

// Update a document by ID
export const updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;

    const updatedDoc = await Document.findOneAndUpdate(
      { _id: id, user: req.user._id },
      updateFields,
      { new: true }
    );

    if (!updatedDoc) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.status(200).json(updatedDoc);
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error });
  }
};

// Delete a document by ID
export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;

    const doc = await Document.findOne({ _id: id, user: req.user._id });

    if (!doc) {
      return res.status(404).json({ message: 'Document not found' });
    }

    if (doc.publicId) {
      await cloudinary.uploader.destroy(doc.publicId);
    }

    await doc.deleteOne();
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error });
  }
};
