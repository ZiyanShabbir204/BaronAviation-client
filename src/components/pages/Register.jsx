import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  TextField,
  Button,
  ThemeProvider,
  createTheme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import axios from "axios";
import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f6bc16", // Customize as needed
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white", // Set text color to white
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16", // Hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16", // Focused border color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // Set label color
        },
      },
    },
  },
});

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    last_name: "",
    first_name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const validateForm = () => {
    let newErrors = {};

    // Field validations
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.first_name.trim())
      newErrors.username = "First Name is required";
    if (!formData.last_name.trim())
      newErrors.username = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const user = {
          username: formData.username,
          email: formData.email,
          phone: formData.phoneNumber,
          password: formData.password,
          first_name: formData.first_name,
          last_name: formData.last_name,
          roleName: "customer",
        };
        const res = await ApiService.post("/auth/register", user);
        enqueueSnackbar("Verification Email has been sent to your email", { variant: "success" });
        navigate("/login");

        console.log("response in signup", res);
      } catch (err) {
        enqueueSnackbar(err.response.data.message, { variant: "error" });

        console.log("Error during registration", err);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="mt-header layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-60 md:mb-30">
                <h2 className="text-gradient-vivid-orange">Register</h2>
                <div className="text-18 fw-500 mt-20 md:mt-15">
                  Let's create your account!
                </div>
                <div className="mt-5">
                  Already have an account?{" "}
                  <Link to="/login" className="text-gradient-vivid-orange">
                    Log In!
                  </Link>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-1 rounded-12 px-60 py-60 md:px-25 md:py-30 bg-dark-grey"
              >
                <TextField
                  label="First Name"
                  name="first_name"
                  variant="outlined"
                  fullWidth
                  value={formData.first_name}
                  onChange={handleInputChange}
                  error={Boolean(errors.first_name)}
                  helperText={errors.first_name}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />
                <TextField
                  label="Last Name"
                  name="last_name"
                  variant="outlined"
                  fullWidth
                  value={formData.last_name}
                  onChange={handleInputChange}
                  error={Boolean(errors.last_name)}
                  helperText={errors.last_name}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />
                <TextField
                  label="Username"
                  name="username"
                  variant="outlined"
                  fullWidth
                  value={formData.username}
                  onChange={handleInputChange}
                  error={Boolean(errors.username)}
                  helperText={errors.username}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />

                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  variant="outlined"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />

                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />

                <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  value={formData.password}
                  onChange={handleInputChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleShowPassword}
                          edge="end"
                          className="password-visibility-button"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />

                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleShowConfirmPassword}
                          edge="end"
                          className="password-visibility-button"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-10 button-gradient text-white"
                >
                  Register
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
