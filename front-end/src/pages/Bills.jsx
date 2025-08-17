import React from "react";
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
  const [search, setSearch] = React.useState("");

  const filteredBills = dummyBills.filter((bill) =>
    bill.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#3949ab">
        My Bills
      </Typography>

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

      <Grid container spacing={3}>
        {filteredBills.length > 0 ? (
          filteredBills.map((bill) => (
            <Grid item xs={12} md={6} lg={4} key={bill.id}>
              <Card elevation={3}>
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

                  <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
                    <Tooltip title="Download">
                      <IconButton color="primary">
                        <DownloadIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error">
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
            <Typography color="text.secondary" textAlign="center">
              No bills found.
            </Typography>
          </Grid>
        )}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="secondary">
          Upload New Bill
        </Button>
      </Box>
    </Box>
  );
};

export default BillsPage;
