import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Neranji Abeysekara",
    email: "neranji@example.com",
    role: "Software Engineering Intern",
    avatarUrl: "https://i.pravatar.cc/300?img=47",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    // Add logic here to save to backend
    setOpenSnackbar(true);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fffdf6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: { xs: 2, md: 4 },
          width: "100%",
          maxWidth: 600,
          borderRadius: 4,
          backgroundColor: "#ffffff",
        }}
      >
        <Box textAlign="center" mb={3}>
          <Avatar
            src={formData.avatarUrl}
            sx={{
              width: 100,
              height: 100,
              mx: "auto",
              mb: 2,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#3d3a34" }}>
            Edit Profile
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            required
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Avatar URL"
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
            margin="normal"
          />

          <Box textAlign="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#f7c59f",
                color: "#3d3a34",
                fontWeight: "bold",
                borderRadius: 3,
                px: 4,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f4b98c",
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </form>

        {/* Snackbar for feedback */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            variant="filled"
          >
            Profile updated successfully!
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};

export default EditProfile;
