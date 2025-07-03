import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Input,
  LinearProgress,
  TextField,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const categories = [
  "Warranty",
  "Receipt",
  "Bill",
  "Insurance",
  "Bank Statement",
  "Tax Document",
  "Other",
];

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [description, setDescription] = useState("");
  const [storeName, setStoreName] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first! 📁");
    if (!category) return alert("Please select a category! 📂");
    if (!title.trim()) return alert("Please enter a document title! 📝");
    if (!date) return alert("Please select the document date! 📅");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("itemName", title);
    formData.append("storeName", storeName || "N/A");
    formData.append("purchaseDate", date);
    formData.append("warrantyPeriod", warrantyPeriod || 0);
    formData.append("expiryDate", expiryDate || date);
    formData.append("documentType", category);
    formData.append("description", description);

    try {
      setUploading(true);
      setProgress(0);

      const token = localStorage.getItem("token");
      if (!token) return alert("Not authenticated! Please log in again.");

      const response = await axios.post(
        "http://localhost:5000/api/documents/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percent);
          },
        }
      );

      if (response.status === 201) {
        alert("Upload Successful! 🎉");
        setFile(null);
        setCategory("");
        setTitle("");
        setDate("");
        setExpiryDate("");
        setDescription("");
        setStoreName("");
        setWarrantyPeriod("");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. ❌");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "90vh", py: 8 }}>
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            bgcolor: "white",
            boxShadow:
              "0 8px 20px rgba(57, 73, 171, 0.1), 0 4px 10px rgba(57, 73, 171, 0.05)",
          }}
        >
          <Typography variant="h4" fontWeight={700} color="#3949ab" mb={3}>
            Upload Your Document 📤
          </Typography>

          <TextField
            fullWidth
            label="Document Title 📝"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            select
            fullWidth
            label="Select Category 📂"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            helperText="Please select the document category"
            sx={{ mb: 3 }}
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Document Date 📅"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Expiry Date (Optional) 📆"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Description 🧾"
            multiline
            minRows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add any relevant notes or info about the document"
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Store Name 🏪 (Optional)"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="Warranty Period (Months) ⏳ (Optional)"
            type="number"
            value={warrantyPeriod}
            onChange={(e) => setWarrantyPeriod(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button
            variant="outlined"
            component="label"
            sx={{
              borderColor: "#3949ab",
              color: "#3949ab",
              fontWeight: 600,
              px: 5,
              py: 1.5,
              mb: 2,
              "&:hover": { borderColor: "#283593", backgroundColor: "#e8eaf6" },
            }}
          >
            Choose File
            <Input type="file" onChange={handleFileChange} sx={{ display: "none" }} />
          </Button>

          <Typography variant="body1" color="text.secondary" mb={3}>
            {file ? file.name : "No file chosen yet..."}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            disabled={!file || uploading}
            onClick={handleUpload}
            sx={{ px: 6, py: 1.8, fontWeight: 700 }}
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>

          {uploading && (
            <Box sx={{ width: "100%", mt: 4 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ height: 10, borderRadius: 5 }}
              />
              <Typography variant="body2" color="text.secondary" mt={1}>
                {progress}% completed
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default UploadPage;
