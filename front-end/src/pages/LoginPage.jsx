import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Paper,
  Link,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthSocialButtons from "../components/AuthSocialButtons"; // Make sure this exists
import { auth, provider, signInWithPopup } from "../firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Google login handler
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const res = await axios.post(
        "http://localhost:5000/api/auth/google-login",
        { idToken }
      );

      localStorage.setItem("token", res.data.token);
      alert("Google login successful 🎉");
      navigate("/upload");
    } catch (err) {
      console.error("Google login failed:", err);
      alert("Google login failed ❌");
    }
  };

  // Email/password login handler
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful! 🎉");
      navigate("/upload");
    } catch (err) {
      console.error("Login failed:", err);
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f0f2f5"
      p={2}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 5 },
          width: { xs: "90%", sm: 400 },
          mx: "auto",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
          Login to Your Account
        </Typography>

        {/* Social login buttons */}
        <Stack spacing={2} mb={3}>
          <AuthSocialButtons onGoogleClick={handleGoogleLogin} />
        </Stack>

        <Divider sx={{ my: 3 }}>or</Divider>

        {/* Email / Password */}
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
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
