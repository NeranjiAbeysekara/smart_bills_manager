import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Divider,
  Paper,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import UpdateIcon from "@mui/icons-material/Update";

const initialNotifications = [
  {
    id: 1,
    icon: <ReceiptLongIcon color="primary" />,
    title: "New Receipt Uploaded 📄",
    message: "You uploaded 'Electronics_Bill_May.pdf'.",
    time: "2 mins ago",
    read: false,
  },
  {
    id: 2,
    icon: <CloudDoneIcon color="success" />,
    title: "Backup Complete ☁️",
    message: "Your documents were backed up securely.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    icon: <UpdateIcon color="secondary" />,
    title: "Warranty Expiry Reminder ⏰",
    message: "'Samsung TV Warranty.pdf' expires in 5 days.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 4,
    icon: <ReceiptLongIcon color="primary" />,
    title: "New Warranty Added ✅",
    message: "Warranty for 'HP Laptop' added successfully.",
    time: "3 days ago",
    read: false,
  },
  {
    id: 5,
    icon: <UpdateIcon color="secondary" />,
    title: "System Update 🔄",
    message: "New features have been added to Smart Receipt Manager.",
    time: "4 days ago",
    read: true,
  },
  {
    id: 6,
    icon: <CloudDoneIcon color="success" />,
    title: "Cloud Sync Successful 🌐",
    message: "Your files were synced at 10:45 PM.",
    time: "5 days ago",
    read: true,
  },
  {
    id: 7,
    icon: <ReceiptLongIcon color="primary" />,
    title: "New Receipt Uploaded 📥",
    message: "You uploaded 'Clothing_Invoice_April.pdf'.",
    time: "6 days ago",
    read: false,
  },
  {
    id: 8,
    icon: <UpdateIcon color="secondary" />,
    title: "Reminder Set 🔔",
    message: "Reminder for 'Fridge Warranty' set for next week.",
    time: "1 week ago",
    read: true,
  },
  {
    id: 9,
    icon: <CloudDoneIcon color="success" />,
    title: "Backup Scheduled ⏳",
    message: "Next backup scheduled for tomorrow at 2 AM.",
    time: "1 week ago",
    read: false,
  },
  {
    id: 10,
    icon: <ReceiptLongIcon color="primary" />,
    title: "Document Shared 📤",
    message: "You shared 'Tax_Receipts_2024.zip' with your accountant.",
    time: "2 weeks ago",
    read: true,
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" fontWeight={600} mb={3} textAlign="center">
        🔔 Notifications
      </Typography>

      <Button
        variant="outlined"
        onClick={handleMarkAllRead}
        sx={{ mb: 3, textTransform: "none", width: "100%", maxWidth: 200, display: "block", mx: "auto" }}
      >
        Mark All as Read
      </Button>

      <Paper elevation={3}>
        <List>
          {notifications.map((n) => (
            <React.Fragment key={n.id}>
              <ListItem
                secondaryAction={
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {!n.read && (
                      <IconButton
                        edge="end"
                        onClick={() => handleMarkAsRead(n.id)}
                        title="Mark as Read"
                        size="large"
                      >
                        <MarkEmailReadIcon />
                      </IconButton>
                    )}
                    <IconButton
                      edge="end"
                      onClick={() => handleDelete(n.id)}
                      title="Delete"
                      size="large"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "transparent" }}>{n.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: n.read ? "normal" : "bold" }}>
                      {n.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {n.message}
                      </Typography>
                      <Typography variant="caption" color="text.disabled">
                        {n.time}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}

          {notifications.length === 0 && (
            <Typography textAlign="center" p={4} color="text.secondary">
              🎉 No new notifications
            </Typography>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default NotificationsPage;
