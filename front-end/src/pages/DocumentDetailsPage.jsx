import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const DocumentDetailsPage = () => {
  const { id } = useParams(); // document ID from URL
  const [document, setDocument] = useState(null);

  useEffect(() => {
    // Fetch document data by ID
    const fetchDocument = async () => {
      try {
        const res = await axios.get(`/api/documents/${id}`);
        setDocument(res.data);
      } catch (err) {
        console.error("Error fetching document:", err);
      }
    };
    fetchDocument();
  }, [id]);

  if (!document) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          📄 Document Details
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1"><strong>Item Name:</strong> {document.itemName}</Typography>
        <Typography variant="body1"><strong>Store Name:</strong> {document.storeName}</Typography>
        <Typography variant="body1"><strong>Purchase Date:</strong> {new Date(document.purchaseDate).toDateString()}</Typography>
        <Typography variant="body1"><strong>Warranty Period:</strong> {document.warrantyPeriod} months</Typography>
        <Typography variant="body1"><strong>Expiry Date:</strong> {new Date(document.expiryDate).toDateString()}</Typography>
        <Typography variant="body1"><strong>Document Type:</strong> {document.documentType}</Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">📎 File:</Typography>
          <a href={document.fileUrl} target="_blank" rel="noreferrer">
            <Button variant="outlined">View / Download File</Button>
          </a>
        </Box>
      </Paper>
    </Container>
  );
};

export default DocumentDetailsPage;
