import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setFormData(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
        alert("Error fetching user profile");
      }
    };
    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditToggle = async () => {
    if (editMode) {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.put(
          "http://localhost:5000/api/user/edit",
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(res.data);
        alert("Profile updated successfully!");
      } catch (err) {
        alert("Update failed");
        console.error(err);
      }
    }
    setEditMode(!editMode);
  };

  if (!user) return <Typography textAlign="center" mt={10}>Loading profile...</Typography>;

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={6} sx={{ p: { xs: 3, sm: 6 }, borderRadius: 4, bgcolor: "#fafafa" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Avatar
            src={user.avatarUrl}
            alt={user.name}
            sx={{
              width: { xs: 100, sm: 130 },
              height: { xs: 100, sm: 130 },
              boxShadow: "0 0 15px rgba(57, 73, 171, 0.4)",
              border: "3px solid #3949ab",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "700", color: "#3949ab", mb: 4 }}
        >
          {editMode ? (
            <TextField
              fullWidth
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              label="👩‍💼 Name"
              variant="outlined"
              sx={{ mb: 3 }}
            />
          ) : (
            <>👩‍💼 {user.name}</>
          )}
        </Typography>

        {[
          { label: "📧 Email", name: "email", type: "email", readOnly: true },
          { label: "📱 Phone Number", name: "phone" },
          { label: "🏠 Address", name: "address", multiline: true, rows: 2 },
          { label: "📝 Bio", name: "bio", multiline: true, rows: 3 },
        ].map(({ label, name, type, readOnly, multiline, rows }) => (
          <Box key={name} sx={{ mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
              {label}
            </Typography>
            {editMode && !readOnly ? (
              <TextField
                fullWidth
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                label={label}
                type={type || "text"}
                multiline={multiline}
                rows={rows}
                variant="outlined"
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
                {formData[name] || "N/A"}
              </Typography>
            )}
          </Box>
        ))}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleEditToggle}
            sx={{
              backgroundColor: "#3949ab",
              px: { xs: 4, sm: 6 },
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
