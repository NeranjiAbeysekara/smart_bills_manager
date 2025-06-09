import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Paper,
  Link,
} from "@mui/material";
import AuthSocialButtons from "../components/AuthSocialButtons";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    alert("Google login clicked — integrate Firebase or OAuth2 here.");
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f0f2f5"
    >
      <Paper elevation={6} sx={{ p: 5, width: 400 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
          Login to Your Account
        </Typography>

        <AuthSocialButtons onGoogleClick={handleGoogleLogin} />

        <Divider sx={{ my: 3 }}>or</Divider>

        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link href="/signup" underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
