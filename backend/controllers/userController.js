import User from '../models/User.js';

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch profile', error });
  }
};

// Edit user profile
export const editUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, phone, address, bio, avatarUrl } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, phone, address, bio, avatarUrl },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update profile', error });
  }
};

// Delete user profile
export const deleteUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found or already deleted' });
    }

    res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete profile', error });
  }
};
