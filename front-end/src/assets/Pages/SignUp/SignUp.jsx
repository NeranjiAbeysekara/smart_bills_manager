// SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import FormControl from "@mui/material/FormControl";
import { 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  IconButton, 
  InputAdornment 
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log(formData);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginNavigation = () => {
    navigate('/login');
  };

  return (
    <div className='S-MainContainer'>
        <div className='S-LeftContainer'>
        <h2 className='mainSignTitle'>SMART BILLER</h2>
        <img src="https://logistifie.com/assets/static/img/invoice1.jpg" alt="System" className='SystemImage' />
        </div>
    <div className="S-RightContainer">
      <div className="SignupForm">
      <h2 class="Signup">SignUp</h2>

        <form onSubmit={handleSubmit} >
         {/* <h2 className="signup-title">SignUp</h2> */}
         <div className="SignupInnerContainer">
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
              size="small"
            className="signup-input"
          />
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
              size="small"
            className="signup-input"
          />
          
          <TextField
            fullWidth
            label="Contact No"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
              size="small"
            className="signup-input"
          />
          
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
              size="small"
            className="signup-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
              size="small"
            className="signup-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          
          
          
          <Button
        style={{ 
            
    backgroundColor:'#2D5852' ,
    color:' white',
    borderRadius:' 8px'
    
             }}

            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="signup-button"
          >
            Sign Up
          </Button>
          </div>
          <div className="login-link">
          Already have an Account? <span onClick={handleLoginNavigation} style={{color: '#035723', cursor: 'pointer'}}>Login</span>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;