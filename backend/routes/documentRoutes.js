import express from 'express';
import {
  uploadDocument,
  getAllDocuments,
  getDocumentsByType,
  updateDocument,
  deleteDocument
} from '../controllers/documentController.js';
import upload from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Upload a new document
router.post('/upload', protect, upload.single('file'), uploadDocument);

// Get all documents for the logged-in user
router.get('/', protect, getAllDocuments);

// Get documents by type (e.g., /api/documents/type/bill)
router.get('/type/:type', protect, getDocumentsByType);

// Update a document by ID
router.put('/:id', protect, updateDocument);

// Delete a document by ID
router.delete('/:id', protect, deleteDocument);

export default router;
