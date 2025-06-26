// backend/routes/authRoutes.js
import express from 'express';
import { login, register, googleLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', register);
router.post('/google-login', googleLogin); // ✅ New route

export default router;
