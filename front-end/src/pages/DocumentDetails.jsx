// src/pages/DocumentDetails.jsx
import { Box, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const DocumentDetails = () => {
  const { state } = useLocation();

  if (!state) {
    return <Typography>Document not found.</Typography>;
  }

  const { title, type, uploadedDate, item, store, warrantyPeriod } = state;

  return (
    <Box sx={{ px: 4, py: 5 }}>
      <Paper
        elevation={3}
        sx={{ p: 5, borderRadius: 4, maxWidth: 800, margin: "auto" }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          {title} 📝
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography>
              <strong>Title:</strong> {title}
            </Typography>
            <Typography>
              <strong>Type:</strong> {type}
            </Typography>
            <Typography>
              <strong>Uploaded Date:</strong> {uploadedDate}
            </Typography>
            <Typography>
              <strong>Item:</strong> {item || "N/A"}
            </Typography>
            <Typography>
              <strong>Store:</strong> {store || "N/A"}
            </Typography>
            <Typography>
              <strong>Warranty Period:</strong> {warrantyPeriod || "N/A"}
            </Typography>
          </Box>

          <Box>
            <PictureAsPdfIcon sx={{ fontSize: 80, color: "red" }} />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default DocumentDetails;
