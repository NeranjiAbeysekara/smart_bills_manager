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
  const navigate = useNavigate(); // <-- add this

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fa", pt: 10, pb: 12 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="h3" fontWeight={700} color="#3949ab" gutterBottom>
              Smart Receipt Manager 📲
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
              Organize, categorize, and manage your receipts easily and securely.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#3949ab", px: 6, py: 1.8, fontWeight: 600 }}
              onClick={() => navigate("/signup")} // <-- fixed navigation here
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
                    width: 220,
                    height: 220,
                    borderRadius: 4,
                    bgcolor: "white",
                    textAlign: "center",
                    px: 3,
                    py: 4,
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
                    sx={{ fontSize: 60, mb: 2, userSelect: "none" }}
                  >
                    {emoji}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#3949ab"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
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
