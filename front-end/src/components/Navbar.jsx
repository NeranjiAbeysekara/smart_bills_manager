import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // 🧹 Remove token
    setAnchorElUser(null);
    navigate("/login"); // 🔁 Redirect to login
  };

  const unreadNotifications = 5;

  return (
    <AppBar position="sticky" color="default" elevation={2}>
      <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "primary.main",
            fontWeight: "bold",
            userSelect: "none",
          }}
        >
          📦 Smart Receipt Manager
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} to="/" color="inherit" sx={{ textTransform: "none" }}>
            Home
          </Button>
          <Button component={Link} to="/documents" color="inherit" sx={{ textTransform: "none" }}>
            My Documents
          </Button>
          <Button component={Link} to="/upload" color="inherit" sx={{ textTransform: "none" }}>
            Upload
          </Button>
          <Button component={Link} to="/statistics" color="inherit" sx={{ textTransform: "none" }}>
            Statistics
          </Button>
        </Box>

        {/* Icons on Right */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 3 }}>
          <Tooltip title="Notifications">
            <IconButton component={Link} to="/notifications" color="inherit" size="large">
              <Badge badgeContent={unreadNotifications} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Account settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User" src="/profile.jpg" />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* 🔑 Logout */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
