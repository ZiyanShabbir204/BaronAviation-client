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
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f6bc16",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

// ✅ Yup Validation Schema
const validationSchema = Yup.object({
  first_name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("First Name is required"),
  last_name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .required("Last Name is required"),
  username: Yup.string().required("Username is required"),
  phoneNumber: Yup.string()
    .matches(
      /^\+92[0-9]{10}$/,
      "Enter phone number with country code (e.g., +923012345678)"
    )
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters, include 1 upper, 1 lower, 1 digit, and 1 special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const user = {
        username: values.username,
        email: values.email,
        phone: values.phoneNumber,
        password: values.password,
        first_name: values.first_name,
        last_name: values.last_name,
        roleName: "customer",
      };
      const res = await ApiService.post("/auth/register", user);
      enqueueSnackbar("Verification Email has been sent to your email", {
        variant: "success",
      });
      navigate("/login");
      console.log("response in signup", res);
    } catch (err) {
      enqueueSnackbar(err.response?.data?.message || "Registration failed", {
        variant: "error",
      });
      console.log("Error during registration", err);
    } finally {
      setSubmitting(false);
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

              {/* ✅ Formik Wrapper */}
              <Formik
                initialValues={{
                  username: "",
                  phoneNumber: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  last_name: "",
                  first_name: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  touched,
                  errors,
                  isSubmitting,
                }) => (
                  <Form className="border-1 rounded-12 px-60 py-60 md:px-25 md:py-30 bg-dark-grey">
                    <TextField
                      label="First Name"
                      name="first_name"
                      variant="standard"
                      fullWidth
                      required
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.first_name && Boolean(errors.first_name)}
                      helperText={touched.first_name && errors.first_name}
                      InputLabelProps={{ style: { color: "#f6bc16" } }}
                      className="mb-3"
                    />
                    <TextField
                      label="Last Name"
                      name="last_name"
                      variant="standard"
                      fullWidth
                      required
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.last_name && Boolean(errors.last_name)}
                      helperText={touched.last_name && errors.last_name}
                      InputLabelProps={{ style: { color: "#f6bc16" } }}
                      className="mb-3"
                    />
                    <TextField
                      label="Username"
                      name="username"
                      variant="standard"
                      fullWidth
                      required
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.username && Boolean(errors.username)}
                      helperText={touched.username && errors.username}
                      InputLabelProps={{ style: { color: "#f6bc16" } }}
                      className="mb-3"
                    />

                    <TextField
                      label="Phone Number"
                      name="phoneNumber"
                      variant="standard"
                      fullWidth
                      required
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={
                        "Enter phone number with country code (e.g., +923012345678)"
                      }
                      InputLabelProps={{ style: { color: "#f6bc16" } }}
                      className="mb-3"
                    />

                    <TextField
                      label="Email"
                      name="email"
                      variant="standard"
                      fullWidth
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      InputLabelProps={{ style: { color: "#f6bc16" } }}
                      className="mb-3"
                    />

                    <TextField
                      label="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      variant="standard"
                      fullWidth
                      required
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                              {showPassword ? (
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

                    <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      variant="standard"
                      fullWidth
                      required
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.confirmPassword &&
                        Boolean(errors.confirmPassword)
                      }
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
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
                      disabled={isSubmitting}
                      className="mt-10 button-gradient text-white"
                    >
                      {isSubmitting ? "Registering..." : "Register"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
