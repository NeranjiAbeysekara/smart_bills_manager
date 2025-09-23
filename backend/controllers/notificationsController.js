// backend/controllers/notificationsController.js
import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.query.userId || req.user?.id; // flexible for dev
    if (!userId) return res.status(400).json({ message: "userId required" });

    const notifs = await Notification.find({ userId }).sort({ createdAt: -1 });
    res.json(notifs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createNotification = async (req, res) => {
  try {
    const { userId, title, message, iconType } = req.body;
    if (!userId || !title || !message) return res.status(400).json({ message: "Missing fields" });

    const n = await Notification.create({ userId, title, message, iconType });
    // optional: emit via socket.io if available
    const io = req.app.get("io");
    if (io) io.to(String(userId)).emit("notification:new", n);

    res.status(201).json(n);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const markRead = async (req, res) => {
  try {
    const { id } = req.params;
    const n = await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
    if (!n) return res.status(404).json({ message: "Not found" });
    const io = req.app.get("io");
    if (io) io.to(String(n.userId)).emit("notification:updated", n);
    res.json(n);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const markAllRead = async (req, res) => {
  try {
    const userId = req.body.userId || req.query.userId || req.user?.id;
    if (!userId) return res.status(400).json({ message: "userId required" });

    await Notification.updateMany({ userId }, { read: true });
    const updated = await Notification.find({ userId }).sort({ createdAt: -1 });
    const io = req.app.get("io");
    if (io) io.to(String(userId)).emit("notification:allRead", { userId });
    res.json({ success: true, notifications: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const n = await Notification.findByIdAndDelete(id);
    if (!n) return res.status(404).json({ message: "Not found" });
    const io = req.app.get("io");
    if (io) io.to(String(n.userId)).emit("notification:deleted", id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
