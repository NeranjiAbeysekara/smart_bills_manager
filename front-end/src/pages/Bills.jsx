import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
  TextField,
  InputAdornment,
  Tooltip,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";

const dummyBills = [
  {
    id: 1,
    title: "Electricity Bill",
    date: "2025-06-01",
    amount: "$78.20",
    provider: "City Power Co.",
  },
  {
    id: 2,
    title: "Internet Bill",
    date: "2025-05-28",
    amount: "$45.99",
    provider: "NetLink",
  },
  {
    id: 3,
    title: "Water Bill",
    date: "2025-05-25",
    amount: "$32.50",
    provider: "City Water Services",
  },
];

const BillsPage = () => {
  const [search, setSearch] = useState("");
  const [bills, setBills] = useState(dummyBills);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

  const filteredBills = bills.filter((bill) =>
    bill.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setBills((prev) => prev.filter((bill) => bill.id !== id));
    setSnackbar({ open: true, message: "Bill deleted successfully", severity: "success" });
  };

  const handleDownload = (title) => {
    setSnackbar({ open: true, message: `Downloading ${title}...`, severity: "info" });
  };

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#3949ab">
        My Bills
      </Typography>

      {/* Search Bar */}
      <Box my={2}>
        <TextField
          label="Search bills"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Bills Grid */}
      <Grid container spacing={3}>
        {filteredBills.length > 0 ? (
          filteredBills.map((bill) => (
            <Grid item xs={12} sm={6} md={4} key={bill.id}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {bill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {bill.date}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    Amount: {bill.amount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Provider: {bill.provider}
                  </Typography>

                  {/* Actions */}
                  <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
                    <Tooltip title="Download">
                      <IconButton color="primary" onClick={() => handleDownload(bill.title)}>
                        <DownloadIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error" onClick={() => handleDelete(bill.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box textAlign="center" py={5}>
              <Typography variant="h6" color="text.secondary">
                📭 No bills found
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      {/* Upload New Bill */}
      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="secondary">
          Upload New Bill
        </Button>
      </Box>

      {/* Snackbar Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BillsPage;
