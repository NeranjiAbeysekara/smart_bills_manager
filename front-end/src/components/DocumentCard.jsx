// src/components/DocumentCard.jsx
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const DocumentCard = ({
  title,
  type,
  updated,
  item,
  store,
  warrantyPeriod,
  uploadedDate,
}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-document", {
      state: {
        title,
        type,
        updated,
        item,
        store,
        warrantyPeriod,
      },
    });
  };

  const handleViewDetails = () => {
    navigate("/document-details", {
      state: {
        title,
        type,
        uploadedDate: uploadedDate || updated,
        item,
        store,
        warrantyPeriod,
      },
    });
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Uploaded: {uploadedDate || updated}
        </Typography>
      </CardContent>

      <Box sx={{ display: "flex", justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button size="small" variant="outlined" onClick={handleViewDetails}>
          View
        </Button>
        <Button size="small" variant="contained" onClick={handleEdit} startIcon={<EditIcon />}>
          Edit
        </Button>
      </Box>
    </Card>
  );
};

export default DocumentCard;
