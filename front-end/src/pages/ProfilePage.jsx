import React from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ProfilePage = () => {
  const user = {
    name: "Neranji Abeysekara",
    email: "neranji@example.com",
    role: "Software Engineering Intern",
    avatarUrl: "https://i.pravatar.cc/300?img=47",
    joinedDate: "January 2025",
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fffdf6", // Soft cream bg
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 600,
          borderRadius: 4,
          backgroundColor: "#ffffff",
        }}
      >
        <Box textAlign="center" mb={4}>
          <Avatar
            src={user.avatarUrl}
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              mb: 2,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#3d3a34" }}>
            {user.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#7a7266" }}>
            {user.role}
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <EmailIcon sx={{ color: "#a08768" }} />
              <Typography sx={{ color: "#3d3a34" }}>{user.email}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <WorkIcon sx={{ color: "#a08768" }} />
              <Typography sx={{ color: "#3d3a34" }}>{user.role}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarMonthIcon sx={{ color: "#a08768" }} />
              <Typography sx={{ color: "#3d3a34" }}>
                Joined: {user.joinedDate}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box textAlign="center">
          <Button
            component={Link}
  to="/editprofile"
            variant="contained"
            startIcon={<EditIcon />}
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
            Edit Profile
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;



