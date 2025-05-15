import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fffdf9", // light cream
        color: "#7d3a34", // soft dark
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        px: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: 600,
            fontSize: "1.2rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          💼 SmartReceipts
        </Typography>

        {/* Nav Items */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {[
            { label: "Home", path: "/" },
            { label: "Documents", path: "/documents" },
            { label: "Upload", path: "/upload" },
          ].map(({ label, path }) => (
            <Button
              key={label}
              component={Link}
              to={path}
              sx={{
                textTransform: "none",
                color: "#3d3a34",
                fontWeight: 500,
                borderRadius: 2,
                fontSize: "0.95rem",
                "&:hover": {
                  backgroundColor: "#fdf5e6",
                },
              }}
            >
              {label}
            </Button>
          ))}

          {/* Notification */}
          <IconButton
            sx={{
              color: "#3d3a34",
              "&:hover": { backgroundColor: "#fdf5e6" },
            }}
          >
            <NotificationsIcon />
          </IconButton>

          {/* Profile Icon */}
          <IconButton
            component={Link}
            to="/profile"
            sx={{
              color: "#3d3a34",
              "&:hover": { backgroundColor: "#fdf5e6" },
            }}
          >
            <AccountCircleIcon fontSize="medium" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




