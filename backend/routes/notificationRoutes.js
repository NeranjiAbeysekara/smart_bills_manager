// backend/routes/notificationRoutes.js
import express from 'express'
import {
  getNotifications,
  createNotification,
  markRead,
  markAllRead,
  deleteNotification,
} from '../controllers/notificationsController.js'

const router = express.Router()

// GET all notifications for a user
router.get('/', getNotifications)

// POST new notification
router.post('/', createNotification)

// PATCH mark single notification as read
router.patch('/:id/read', markRead)

// PATCH mark all notifications as read
router.patch('/mark-all-read', markAllRead)

// DELETE notification
router.delete('/:id', deleteNotification)

export default router
