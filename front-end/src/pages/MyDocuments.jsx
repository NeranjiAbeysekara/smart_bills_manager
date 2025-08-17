import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Dialog, DialogTitle, DialogContent } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ Import Link

const categories = [
  { name: "Receipt", emoji: "🧾" },
  { name: "Bill", emoji: "💸" },
  { name: "Warranty", emoji: "🛠️" },
  { name: "Insurance", emoji: "🛡️" },
  { name: "Travel", emoji: "✈️" },
  { name: "Tax Documents", emoji: "📊" },
  { name: "Memos", emoji: "📝" },
  { name: "Contracts", emoji: "📃" },
  { name: "Others", emoji: "📁" },
];

const MyDocuments = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchDocumentsByType = async (type) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:5000/api/documents/type/${type}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDocuments(res.data);
      setOpen(true);
    } catch (err) {
      alert("Failed to fetch documents.");
      console.error(err);
    }
  };

  const handleCategoryClick = (name) => {
    setSelectedCategory(name);
    fetchDocumentsByType(name);
  };

  return (
    <Box sx={{ minHeight: "80vh", pt: 10, px: 4, backgroundColor: "#f5f7fa" }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={6}
        color="#3949ab"
        letterSpacing={1}
      >
        📂 My Documents
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {categories.map(({ name, emoji }) => (
          <Grid item key={name} xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Paper
              elevation={6}
              onClick={() => handleCategoryClick(name)}
              sx={{
                width: 180,
                height: 180,
                borderRadius: 4,
                bgcolor: "white",
                textAlign: "center",
                cursor: "pointer",
                px: 2,
                py: 3,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 8px 20px rgba(57, 73, 171, 0.3), 0 4px 12px rgba(57, 73, 171, 0.15)",
                },
              }}
            >
              <Typography variant="h1" sx={{ fontSize: 56, mb: 2 }}>
                {emoji}
              </Typography>
              <Typography variant="h6" fontWeight={600} color="#3949ab">
                {name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal for documents */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{selectedCategory} Documents</DialogTitle>
        <DialogContent dividers>
          {documents.length > 0 ? (
            documents.map((doc) => (
              <Box key={doc._id} mb={2} p={2} border="1px solid #ddd" borderRadius={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {doc.itemName}
                </Typography>
                <Typography variant="body2">Date: {doc.purchaseDate}</Typography>
                <Link to={`/documents/${doc._id}`} style={{ textDecoration: "none", color: "#3949ab" }}>
                  🔍 View Details
                </Link>
              </Box>
            ))
          ) : (
            <Typography>No documents found in this category.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default MyDocuments;
