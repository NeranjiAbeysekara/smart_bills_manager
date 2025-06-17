import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user
    const user = await User.create({ name, email, password });

    res.json({ token: generateToken(user._id) });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Email not found' });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  res.json({ token: generateToken(user._id) });
};

