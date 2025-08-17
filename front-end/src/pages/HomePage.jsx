import React from "react";
import { Box, Typography, Button, Grid, Paper, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const features = [
  { emoji: "📤", title: "Upload Receipts", desc: "Easily upload your receipts, invoices, and warranty cards." },
  { emoji: "📂", title: "Smart Categories", desc: "Organize documents by Bills, Insurance, Warranty & more." },
  { emoji: "🔍", title: "Search & Filter", desc: "Find any document instantly with keywords or filters." },
  { emoji: "☁️", title: "Secure Cloud Storage", desc: "Access your documents securely anytime, anywhere." },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fa", pt: 10, pb: 12 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} textAlign="center">
            <Typography
              variant="h3"
              fontWeight={700}
              color="#3949ab"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }} // responsive font
            >
              Smart Receipt Manager 📲
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              mb={4}
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Organize, categorize, and manage your receipts easily and securely.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#3949ab",
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 1.8 },
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ mt: 12 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="#3949ab"
            textAlign="center"
            gutterBottom
            sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
          >
            What You Can Do ✨
          </Typography>

          <Grid container spacing={5} justifyContent="center" mt={4}>
            {features.map(({ emoji, title, desc }) => (
              <Grid
                item
                key={title}
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Paper
                  elevation={6}
                  sx={{
                    width: { xs: "100%", sm: 250, md: 220 }, // responsive width
                    minHeight: { xs: 180, md: 220 }, // flexible height
                    borderRadius: 4,
                    bgcolor: "white",
                    textAlign: "center",
                    px: { xs: 2, md: 3 },
                    py: { xs: 3, md: 4 },
                    cursor: "default",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow:
                        "0 10px 30px rgba(57, 73, 171, 0.3), 0 6px 20px rgba(57, 73, 171, 0.15)",
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: 40, md: 60 },
                      mb: 2,
                      userSelect: "none",
                    }}
                  >
                    {emoji}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#3949ab"
                    gutterBottom
                    sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, fontSize: { xs: "0.85rem", md: "0.9rem" } }}
                  >
                    {desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
