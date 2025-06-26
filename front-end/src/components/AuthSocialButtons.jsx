import React from "react";
import { Button, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const AuthSocialButtons = ({ onGoogleClick }) => {
  return (
    <Stack spacing={2} direction="column" width="100%">
      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        fullWidth
        onClick={onGoogleClick} // 🔑 Calls passed handler for Google sign-in
      >
        Continue with Google
      </Button>

      <Button
        variant="outlined"
        startIcon={<FacebookIcon />}
        fullWidth
        onClick={() => alert("Facebook login not implemented yet")}
      >
        Continue with Facebook
      </Button>

      <Button
        variant="outlined"
        startIcon={<AppleIcon />}
        fullWidth
        onClick={() => alert("Apple login not implemented yet")}
      >
        Continue with Apple
      </Button>
    </Stack>
  );
};

export default AuthSocialButtons;
