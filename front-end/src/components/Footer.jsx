import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#3949ab",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Smart Receipt Manager
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 320 }}>
              Manage your receipts, warranties, and bills all in one place. Stay organized and stress-free!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/receipts" color="inherit" underline="hover">
                Receipts
              </Link>
              <Link href="/bills" color="inherit" underline="hover">
                Bills
              </Link>
              <Link href="/warranty" color="inherit" underline="hover">
                Warranty
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                aria-label="facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" pt={4} fontSize={14} color="rgba(255,255,255,0.7)">
          © {new Date().getFullYear()} Smart Receipt Manager. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;




