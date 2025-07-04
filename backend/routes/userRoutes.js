import express from 'express';
import {
  getUserProfile,
  editUserProfile,
  deleteUserProfile
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get user profile
router.get('/profile', protect, getUserProfile);

// Edit user profile
router.put('/edit', protect, editUserProfile);

// Delete user profile
router.delete('/delete', protect, deleteUserProfile);

export default router;
