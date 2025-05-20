// src/pages/EditDocument.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { Edit, Save, Cancel, Delete, UploadFile, CalendarToday } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditDocument() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    itemName: '',
    storeName: '',
    purchaseDate: '',
    warrantyPeriod: '',
    documentType: '',
    file: null,
  });

  useEffect(() => {
    if (location.state) {
      setFormData({
        itemName: location.state.item || location.state.title || '',
        storeName: location.state.store || '',
        purchaseDate: location.state.updated || '',
        warrantyPeriod: location.state.warrantyPeriod || '',
        documentType: location.state.type || '',
        file: null,
      });
    }
  }, [location.state]);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = () => {
    console.log('Saving:', formData);
    // Add save logic here
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f4f6f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <Edit sx={{ mr: 1 }} /> Edit Document
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Item Name"
              value={formData.itemName}
              onChange={handleChange('itemName')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Store Name"
              value={formData.storeName}
              onChange={handleChange('storeName')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Purchase Date"
              value={formData.purchaseDate}
              onChange={handleChange('purchaseDate')}
              placeholder="dd/mm/yyyy"
              variant="outlined"
              InputProps={{
                endAdornment: <CalendarToday fontSize="small" />
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Warranty Period"
              value={formData.warrantyPeriod}
              onChange={handleChange('warrantyPeriod')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Document Type"
              value={formData.documentType}
              onChange={handleChange('documentType')}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="outlined"
              component="label"
              endIcon={<UploadFile />}
              sx={{ height: '100%' }}
            >
              Upload File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit} startIcon={<Save />}>
            Save
          </Button>
          <Button variant="outlined" color="error" onClick={() => navigate(-1)} startIcon={<Cancel />}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: 'red' }} startIcon={<Delete />}>
            Delete
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
