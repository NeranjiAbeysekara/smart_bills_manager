import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ShieldIcon from "@mui/icons-material/Shield";
import InsightsIcon from "@mui/icons-material/Insights";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#1e1e2f", minHeight: "100vh", color: "#fff" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(to right, #22223b, #3a3a5a)",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Smart Receipt Manager
          </Typography>
          <Typography variant="h6" color="gray" sx={{ mb: 4 }}>
            All your receipts. Organized. Secure. Effortless.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/upload"
            sx={{
              backgroundColor: "#f4a261",
              color: "#1e1e2f",
              px: 4,
              py: 1.5,
              borderRadius: 8,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#e76f51",
              },
            }}
          >
            Upload a Receipt
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#2a2a3d",
                color: "#fff",
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <ReceiptLongIcon sx={{ fontSize: 40, color: "#f4a261" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  Centralized Receipts
                </Typography>
                <Typography variant="body2" color="gray">
                  Store and manage all your digital receipts in one secure place.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#2a2a3d",
                color: "#fff",
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <ShieldIcon sx={{ fontSize: 40, color: "#f4a261" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  Encrypted & Safe
                </Typography>
                <Typography variant="body2" color="gray">
                  Every document is encrypted and only accessible to you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#2a2a3d",
                color: "#fff",
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <WatchLaterIcon sx={{ fontSize: 40, color: "#f4a261" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  Warranty Reminders
                </Typography>
                <Typography variant="body2" color="gray">
                  Get alerts before your product warranties expire.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#2a2a3d",
                color: "#fff",
                borderRadius: 4,
                height: "100%",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <InsightsIcon sx={{ fontSize: 40, color: "#f4a261" }} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  Track Spending
                </Typography>
                <Typography variant="body2" color="gray">
                  View analytics and insights from your receipt history.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Final CTA */}
      <Box sx={{ py: 6, textAlign: "center", backgroundColor: "#14141f" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Take control of your receipts today.
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to="/documents"
          sx={{
            borderColor: "#f4a261",
            color: "#f4a261",
            px: 4,
            py: 1.2,
            borderRadius: 6,
            "&:hover": {
              backgroundColor: "#f4a261",
              color: "#1e1e2f",
            },
          }}
        >
          Go to My Documents
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;

