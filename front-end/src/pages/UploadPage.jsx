import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";

const UploadPage = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    storeName: "",
    purchaseDate: "",
    warrantyPeriod: "",
    documentType: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object to send with POST
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    console.log("Submitting: ", formData);
    // Call your API to upload the file + metadata
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
        <Typography variant="h5" gutterBottom>
          📤 Upload Receipt / Warranty
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="itemName"
                label="Item Name"
                fullWidth
                required
                value={formData.itemName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="storeName"
                label="Store Name"
                fullWidth
                value={formData.storeName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="purchaseDate"
                label="Purchase Date"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={formData.purchaseDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="warrantyPeriod"
                label="Warranty Period (in months)"
                type="number"
                fullWidth
                value={formData.warrantyPeriod}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="documentType"
                label="Document Type"
                select
                fullWidth
                required
                value={formData.documentType}
                onChange={handleChange}
              >
                <MenuItem value="receipt">Receipt</MenuItem>
                <MenuItem value="warranty">Warranty Card</MenuItem>
                <MenuItem value="invoice">Invoice</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" component="label" fullWidth>
                Upload File
                <input
                  type="file"
                  hidden
                  name="file"
                  onChange={handleChange}
                  accept=".jpg,.png,.pdf"
                />
              </Button>
              {formData.file && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected: {formData.file.name}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default UploadPage;
