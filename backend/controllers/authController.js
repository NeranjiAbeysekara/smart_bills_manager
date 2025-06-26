// backend/controllers/authController.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import admin from '../config/firebaseAdmin.js';

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    const user = await User.create({ name, email, password });
    res.json({ token: generateToken(user._id) });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Email not found' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

  res.json({ token: generateToken(user._id) });
};

// ✅ Google login handler
export const googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { email, name, picture } = decodedToken;

    let user = await User.findOne({ email });

    if (!user) {
      // Create user without password
      user = await User.create({
        name,
        email,
        avatarUrl: picture,
        password: Math.random().toString(36).slice(-8), // dummy password
      });
    }

    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(401).json({ message: 'Invalid Google token' });
  }
};
