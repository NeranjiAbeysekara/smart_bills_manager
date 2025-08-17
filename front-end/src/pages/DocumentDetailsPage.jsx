import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const DocumentDetailsPage = () => {
  const { id } = useParams();
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found. Please log in.");

        const res = await axios.get(`http://localhost:5000/api/documents/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDocument(res.data);
      } catch (err) {
        console.error("Error fetching document:", err);
        setError("Failed to load document details.");
      } finally {
        setLoading(false);
      }
    };
    fetchDocument();
  }, [id]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );

  if (error) return <Typography color="error" align="center">{error}</Typography>;

  if (!document) return null;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h5" gutterBottom>
          📄 Document Details
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
          <strong>Item Name:</strong> {document.itemName}
        </Typography>
        <Typography variant="body1"><strong>Store Name:</strong> {document.storeName}</Typography>
        <Typography variant="body1">
          <strong>Purchase Date:</strong> {new Date(document.purchaseDate).toDateString()}
        </Typography>
        <Typography variant="body1">
          <strong>Warranty Period:</strong> {document.warrantyPeriod} months
        </Typography>
        <Typography variant="body1">
          <strong>Expiry Date:</strong> {new Date(document.expiryDate).toDateString()}
        </Typography>
        <Typography variant="body1"><strong>Document Type:</strong> {document.documentType}</Typography>
        <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
          <strong>Description:</strong> {document.description}
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">📎 File:</Typography>

          {document.fileUrl?.match(/\.(jpeg|jpg|png|gif)$/i) ? (
            <Box mt={2}>
              <img
                src={document.fileUrl}
                alt="Document Preview"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </Box>
          ) : (
            <a href={document.fileUrl} target="_blank" rel="noreferrer">
              <Button variant="outlined">View / Download File</Button>
            </a>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default DocumentDetailsPage;
