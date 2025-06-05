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

const SignupPage = () => {
  const handleGoogleSignup = () => {
    alert("Google signup clicked — integrate Firebase or OAuth2 here.");
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
          Create an Account
        </Typography>

        <AuthSocialButtons onGoogleClick={handleGoogleSignup} />

        <Divider sx={{ my: 3 }}>or</Divider>

        <TextField label="Full Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignupPage;
