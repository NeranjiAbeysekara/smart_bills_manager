import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const statsData = [
  { name: "Jan", receipts: 30, uploads: 20 },
  { name: "Feb", receipts: 45, uploads: 35 },
  { name: "Mar", receipts: 60, uploads: 40 },
  { name: "Apr", receipts: 50, uploads: 60 },
  { name: "May", receipts: 80, uploads: 50 },
];

const pieData = [
  { name: "Receipts", value: 400 },
  { name: "Warranties", value: 300 },
  { name: "Invoices", value: 300 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const Statistics = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        📊 Statistics Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, textAlign: "center", backgroundColor: "#e3f2fd" }}>
            <Typography variant="h6">Total Receipts</Typography>
            <Typography variant="h4" fontWeight="bold">💼 520</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, textAlign: "center", backgroundColor: "#fce4ec" }}>
            <Typography variant="h6">Total Warranties</Typography>
            <Typography variant="h4" fontWeight="bold">📜 130</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, textAlign: "center", backgroundColor: "#e8f5e9" }}>
            <Typography variant="h6">Total Uploads</Typography>
            <Typography variant="h4" fontWeight="bold">📤 280</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Line Chart */}
      <Typography variant="h6" gutterBottom>📈 Monthly Upload Trend</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={statsData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="uploads" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/* Bar Chart */}
      <Box mt={6}>
        <Typography variant="h6" gutterBottom>📦 Monthly Receipt Comparison</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="receipts" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Pie Chart */}
      <Box mt={6} mb={6}>
        <Typography variant="h6" gutterBottom>📊 Document Type Distribution</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Statistics;
