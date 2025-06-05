import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "janedoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main Street, City, Country",
    bio: "I love managing receipts and staying organized! 📦✨",
    avatarUrl: "/profile.jpg",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditToggle = () => {
    if (editMode) {
      setUser({ ...formData });
    }
    setEditMode(!editMode);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, mb: 10 }}>
      <Paper
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 4,
          bgcolor: "#fafafa",
          boxShadow: "0 8px 20px rgba(57, 73, 171, 0.15)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <Avatar
            src={user.avatarUrl}
            alt={user.name}
            sx={{
              width: 130,
              height: 130,
              boxShadow: "0 0 15px rgba(57, 73, 171, 0.4)",
              border: "3px solid #3949ab",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "700", color: "#3949ab" }}
        >
          {editMode ? (
            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="👩‍💼 Name"
              variant="outlined"
              size="medium"
              sx={{ mb: 3 }}
              autoFocus
            />
          ) : (
            <>👩‍💼 {user.name}</>
          )}
        </Typography>

        {[
          { label: "📧 Email", name: "email", type: "email" },
          { label: "📱 Phone Number", name: "phone", type: "tel" },
          { label: "🏠 Address", name: "address", multiline: true, rows: 2 },
          { label: "📝 Bio", name: "bio", multiline: true, rows: 3 },
        ].map(({ label, name, type, multiline, rows }) => (
          <Box key={name} sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              {label}
            </Typography>
            {editMode ? (
              <TextField
                fullWidth
                name={name}
                value={formData[name]}
                onChange={handleChange}
                label={label}
                variant="outlined"
                size="medium"
                type={type || "text"}
                multiline={multiline}
                rows={rows}
              />
            ) : (
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#333",
                  whiteSpace: "pre-line",
                  minHeight: multiline ? (rows || 1) * 24 : "auto",
                }}
              >
                {label} {user[name]}
              </Typography>
            )}
          </Box>
        ))}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="contained"
            onClick={handleEditToggle}
            sx={{
              backgroundColor: "#3949ab",
              px: 6,
              py: 1.8,
              fontWeight: 600,
              fontSize: 16,
              "&:hover": { backgroundColor: "#2c3aa0" },
            }}
          >
            {editMode ? "💾 Save" : "✏️ Edit Profile"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;


