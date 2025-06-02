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
  Alert,
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
  const [errors, setErrors] = useState({
    itemName: "",
    purchaseDate: "",
    documentType: "",
    file: "",
    warrantyPeriod: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      itemName: "",
      purchaseDate: "",
      documentType: "",
      file: "",
      warrantyPeriod: "",
    };

    if (!formData.itemName.trim()) {
      newErrors.itemName = "Item Name is required";
      isValid = false;
    }
    if (!formData.purchaseDate) {
      newErrors.purchaseDate = "Purchase Date is required";
      isValid = false;
    }
    if (!formData.documentType) {
      newErrors.documentType = "Document Type is required";
      isValid = false;
    }
    if (!formData.file) {
      newErrors.file = "Please select a file";
      isValid = false;
    }
    if (formData.warrantyPeriod && (isNaN(formData.warrantyPeriod) || formData.warrantyPeriod <= 0)) {
      newErrors.warrantyPeriod = "Warranty Period must be a positive number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
      setErrors({ ...errors, file: files[0] ? "" : "Please select a file" });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      console.log('Upload successful:', result);
      setSuccessMessage("Upload successful!");
      setFormData({
        itemName: "",
        storeName: "",
        purchaseDate: "",
        warrantyPeriod: "",
        documentType: "",
        file: null,
      });
      setTimeout(() => setSuccessMessage(""), 3000); // Hide alert after 3 seconds
    } catch (error) {
      console.error('Upload error:', error);
      setErrorMessage("Upload failed. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000); // Hide error after 3 seconds
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
        <Typography variant="h5" gutterBottom>
          📤 Upload Receipt / Warranty
        </Typography>
        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}
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
                error={!!errors.itemName}
                helperText={errors.itemName}
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
                error={!!errors.purchaseDate}
                helperText={errors.purchaseDate}
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
                error={!!errors.warrantyPeriod}
                helperText={errors.warrantyPeriod}
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
                error={!!errors.documentType}
                helperText={errors.documentType}
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
              {errors.file && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {errors.file}
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