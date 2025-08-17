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

const dummyReceipts = [
  { id: 1, title: "Grocery Store", date: "2025-06-04", total: "$45.30", category: "Groceries" },
  { id: 2, title: "Electronics", date: "2025-06-02", total: "$299.99", category: "Tech" },
  { id: 3, title: "Restaurant", date: "2025-05-29", total: "$23.75", category: "Food" },
];

const ReceiptsPage = () => {
  const [search, setSearch] = React.useState("");

  const filteredReceipts = dummyReceipts.filter((receipt) =>
    receipt.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={{ xs: 2, sm: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#3949ab" textAlign="center">
        My Receipts
      </Typography>

      <Box my={2}>
        <TextField
          label="Search receipts"
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

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {filteredReceipts.length > 0 ? (
          filteredReceipts.map((receipt) => (
            <Grid item xs={12} sm={6} md={4} key={receipt.id}>
              <Card elevation={3} sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {receipt.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {receipt.date}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    Total: {receipt.total}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {receipt.category}
                  </Typography>

                  <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
                    <Tooltip title="Download">
                      <IconButton color="primary" size="small">
                        <DownloadIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error" size="small">
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
            <Typography color="text.secondary" textAlign="center" mt={4}>
              No receipts found.
            </Typography>
          </Grid>
        )}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="secondary" size="large" sx={{ textTransform: "none" }}>
          Upload New Receipt
        </Button>
      </Box>
    </Box>
  );
};

export default ReceiptsPage;
