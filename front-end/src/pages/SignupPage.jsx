// frontend/pages/SignupPage.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Paper,
  Link,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthSocialButtons from "../components/AuthSocialButtons";
import { auth, provider, signInWithPopup } from "../firebase";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Google signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const res = await axios.post("http://localhost:5000/api/auth/google-login", {
        idToken,
      });

      localStorage.setItem("token", res.data.token);
      alert("Google signup successful 🎉");
      navigate("/upload");
    } catch (err) {
      console.error("Google signup error:", err);
      alert("Google signup failed ❌");
    }
  };

  // Manual signup
  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Registration successful! 🎉");
      navigate("/upload");
    } catch (err) {
      console.error("Registration failed:", err);
      alert(err.response?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f0f2f5"
      p={{ xs: 2, sm: 0 }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 5 },
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          textAlign="center"
        >
          Create an Account
        </Typography>

        <AuthSocialButtons onGoogleClick={handleGoogleSignup} />

        <Divider sx={{ my: 3 }}>or</Divider>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          sx={{ mt: 2, py: 1.8, textTransform: "none" }}
          onClick={handleSignup}
        >
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
