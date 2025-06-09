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
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    if (!fileName) return alert("Please select a file first! 📁");
    if (!category) return alert("Please select a category! 📂");
    if (!title.trim()) return alert("Please enter a document title! 📝");
    if (!date) return alert("Please select the document date! 📅");

    setUploading(true);
    setProgress(0);

    // Fake upload progress simulation
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setUploading(false);
          setFileName("");
          setCategory("");
          setTitle("");
          setDate("");
          alert("Upload Successful! 🎉");
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300);
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

          {/* Document Title */}
          <TextField
            fullWidth
            label="Document Title 📝"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* Category Select */}
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

          {/* Date Picker */}
          <TextField
            fullWidth
            label="Document Date 📅"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* File Upload */}
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
            <Input
              type="file"
              onChange={handleFileChange}
              sx={{ display: "none" }}
            />
          </Button>

          <Typography variant="body1" color="text.secondary" mb={3}>
            {fileName || "No file chosen yet..."}
          </Typography>

          {/* Upload Button */}
          <Button
            variant="contained"
            color="primary"
            disabled={!fileName || uploading}
            onClick={handleUpload}
            sx={{ px: 6, py: 1.8, fontWeight: 700 }}
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>

          {/* Progress Bar */}
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

