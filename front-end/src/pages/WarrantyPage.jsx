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

const dummyWarranties = [
  {
    id: 1,
    product: "Laptop - Dell XPS 13",
    warrantyEnd: "2026-03-15",
    purchaseDate: "2024-03-15",
    seller: "TechStore",
  },
  {
    id: 2,
    product: "Smartphone - Pixel 8",
    warrantyEnd: "2025-11-02",
    purchaseDate: "2023-11-02",
    seller: "Mobile Planet",
  },
  {
    id: 3,
    product: "Air Conditioner - LG",
    warrantyEnd: "2027-07-01",
    purchaseDate: "2022-07-01",
    seller: "Cooling Experts",
  },
];

const WarrantyPage = () => {
  const [search, setSearch] = React.useState("");

  const filteredWarranties = dummyWarranties.filter((w) =>
    w.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="#3949ab">
        Product Warranties
      </Typography>

      <Box my={2}>
        <TextField
          label="Search warranties"
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
        {filteredWarranties.length > 0 ? (
          filteredWarranties.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {item.product}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Purchased on: {item.purchaseDate}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    Warranty valid till: {item.warrantyEnd}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Seller: {item.seller}
                  </Typography>

                  <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
                    <Tooltip title="Download Warranty">
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
              No warranty records found.
            </Typography>
          </Grid>
        )}
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="secondary">
          Upload Warranty
        </Button>
      </Box>
    </Box>
  );
};

export default WarrantyPage;

