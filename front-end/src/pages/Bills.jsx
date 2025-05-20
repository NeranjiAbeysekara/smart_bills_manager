import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import DocumentCard from '../components/DocumentCard';

const bills = [
  { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
  { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
  { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
  { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
  { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
];

const Bills = () => {
  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography variant="h4" color="primary" fontWeight="bold" sx={{ mb: 4 }}>
        Bills
      </Typography>

      <Grid container spacing={2}>
        {bills.map((doc, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <DocumentCard {...doc} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bills;
