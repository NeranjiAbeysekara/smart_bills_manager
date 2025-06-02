import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAppIcon from "@mui/icons-material/GetApp";

const dummyDocuments = [
  {
    id: 1,
    name: "Samsung TV Receipt",
    category: "Electronics",
    uploadedAt: "2025-05-20",
    expiry: "2026-05-20",
  },
  {
    id: 2,
    name: "Nike Shoes Receipt",
    category: "Fashion",
    uploadedAt: "2025-04-10",
    expiry: "2025-10-10",
  },
  {
    id: 3,
    name: "Cargills Life Insurance",
    category: "Insurance",
    uploadedAt: "2025-02-01",
    expiry: "2026-02-01",
  },
  {
    id: 4,
    name: "Washing Machine Invoice",
    category: "Appliances",
    uploadedAt: "2025-01-15",
    expiry: "2026-01-15",
  },
  {
    id: 5,
    name: "Electricity Bill",
    category: "Utilities",
    uploadedAt: "2025-05-01",
    expiry: "2025-06-01",
  },
];

const MyDocuments = () => {
  const [search, setSearch] = React.useState("");

  const filteredDocs = dummyDocuments.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupedByCategory = filteredDocs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {});

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Documents
      </Typography>

      <TextField
        label="Search documents"
        variant="outlined"
        fullWidth
        sx={{ mb: 4 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {Object.keys(groupedByCategory).length === 0 && (
        <Typography>No documents found.</Typography>
      )}

      {Object.entries(groupedByCategory).map(([category, docs]) => (
        <Box key={category} sx={{ mb: 5 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#5a4d41",
              backgroundColor: "#fff5e1",
              p: 1.5,
              borderRadius: 2,
            }}
          >
            {category}
          </Typography>
          <Grid container spacing={3}>
            {docs.map((doc) => (
              <Grid item xs={12} sm={6} md={4} key={doc.id}>
                <Card
                  sx={{
                    backgroundColor: "#fffaf1",
                    borderRadius: 3,
                    boxShadow: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {doc.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Uploaded: {doc.uploadedAt}
                    </Typography>
                    <Typography variant="body2" color="error">
                      Expiry: {doc.expiry}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton color="primary" title="View">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton color="success" title="Download">
                      <GetAppIcon />
                    </IconButton>
                    <IconButton color="error" title="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default MyDocuments;


