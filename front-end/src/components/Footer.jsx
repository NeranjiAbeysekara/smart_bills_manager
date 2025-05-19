import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f0f0f0", // Light gray background
        color: "#333",              // Dark text for contrast
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Smart Receipt Manager
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Manage all your receipts, warranties, and documents in one
              secure place.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/documents" color="inherit" underline="hover">
                Documents
              </Link>
              <Link href="/upload" color="inherit" underline="hover">
                Upload
              </Link>
              <Link href="/profile" color="inherit" underline="hover">
                Profile
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Email: support@smartreceipt.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Address: 123 Receipt St, Tech City
            </Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Follow Us
            </Typography>
            <Box>
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "#333" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "#333" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "#333" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: "#333" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "rgba(0,0,0,0.1)" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.6, fontSize: "0.9rem" }}
        >
          © {new Date().getFullYear()} Smart Receipt Manager. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

