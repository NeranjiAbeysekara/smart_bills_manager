import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Receipts", emoji: "🧾" },
  { name: "Bills", emoji: "💸" },
  { name: "Warranty", emoji: "🛠️" },
  { name: "Insurance", emoji: "🛡️" },
  { name: "Travel", emoji: "✈️" },
  { name: "Tax Documents", emoji: "📊" },
  { name: "Memos", emoji: "📝" },
  { name: "Contracts", emoji: "📃" },
  { name: "Others", emoji: "📁" },
];

const MyDocuments = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    const path = `/${name.toLowerCase().replace(/\s/g, "")}`;
    navigate(path);
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

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        {categories.map(({ name, emoji }) => (
          <Grid
            item
            key={name}
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={6}
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
              onClick={() => handleCategoryClick(name)}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: 56, mb: 2, userSelect: "none" }}
              >
                {emoji}
              </Typography>
              <Typography
                variant="h6"
                fontWeight={600}
                color="#3949ab"
                sx={{ userSelect: "none" }}
              >
                {name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyDocuments;
