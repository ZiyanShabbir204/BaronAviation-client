import { Link } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";
import ApiService from "@/api.service";

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
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Field validations
    if (!formData.username.trim()) newErrors.username = "Username is required";
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
          roleName: "customer",
        };
        await ApiService.post("/auth/register",user)
      } catch (err) {
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
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={formData.password}
                  onChange={handleInputChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  InputLabelProps={{ style: { color: "#f6bc16" } }}
                  className="mb-3"
                />

                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
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
