import { Box, Typography, Divider, Grid, Paper } from "@mui/material";
import DocumentCard from "../components/DocumentCard";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Bills",
    documents: [
      { title: "Electricity Bill", type: "PDF", updated: "2025-03-10" },
      { title: "Water Bill", type: "PDF", updated: "2025-03-10" },
    ],
  },
  {
    title: "Warranties",
    documents: [
      { title: "Laptop Warranty", type: "PDF", updated: "2025-03-10" },
      { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
      { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
      { title: "Phone Warranty", type: "PDF", updated: "2025-03-10" },
    ],
  },
  {
    title: "Receipts",
    documents: [
      { title: "Store Receipt", type: "PDF", updated: "2025-03-10" },
      { title: "Online Purchase Receipt", type: "PDF", updated: "2025-03-10" },
      { title: "Online Purchase Receipt", type: "PDF", updated: "2025-03-10" },
    ],
  },
  {
    title: "Insurance Documents",
    documents: [
      { title: "Health Insurance", type: "PDF", updated: "2025-03-10" },
      { title: "Car Insurance", type: "PDF", updated: "2025-03-10" },
    ],
  },
  {
    title: "Invoices",
    documents: [
      { title: "Electricity Bill", type: "PDF", updated: "2025-03-10" },
      { title: "Water Bill", type: "PDF", updated: "2025-03-10" },
    ],
  },
];

const MyDocuments = () => {
  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          📑 My Documents
        </Typography>

        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: 5 }}>
            {/* If the section is "Bills", make it a clickable link */}
            {section.title === "Bills" ? (
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                component={Link}
                to="/bills"
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                {section.title}
              </Typography>
            ) : (
              <Typography variant="h6" color="primary" fontWeight="bold">
                {section.title}
              </Typography>
            )}

            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              {section.documents.map((doc, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <DocumentCard {...doc} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default MyDocuments;
