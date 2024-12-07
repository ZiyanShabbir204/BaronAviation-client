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

import { useAuth } from "@/contexts/auth.context";
import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f6bc16", // Adjust as per requirement
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white", // Set text color to white
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Set default border color to white
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16", // Set hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16", // Set focused border color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // Set label text color to white
        },
      },
    },
  },
});

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!username.trim()) formErrors.username = "Username is required";
    if (!password.trim()) formErrors.password = "Password is required";
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({ username: "", password: "" });

    try {
      const res = await login(username, password);

      // console.log("res",res)
      if (res.role == "cooperate_customer") {
        navigate("/dashboard");
        // enqueueSnackbar("Login successfully",{variant:"success"})
        return;
      }
      navigate("/");
      // enqueueSnackbar("Login successfully",{variant:"success"})
    } catch (err) {
      enqueueSnackbar(err.response.data.message, { variant: "error" });
      console.log("err", err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="mt-header layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-60 md:mb-30">
                <h2 className="text-gradient-vivid-orange">Log In</h2>
                <div className="text-18 fw-500 mt-20 md:mt-15">
                  We're glad to see you again!
                </div>
                <div className="mt-5">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-gradient-vivid-orange">
                    Sign Up!
                  </Link>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-1 rounded-12 px-60 py-60 md:px-25 md:py-30 bg-dark-grey"
              >
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={Boolean(errors.username)}
                  helperText={errors.username}
                  InputProps={{
                    style: { color: "white" },
                    classes: {
                      notchedOutline: "border-color",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#f6bc16" },
                  }}
                />

                <TextField
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  InputProps={{
                    style: { color: "white" },
                    classes: {
                      notchedOutline: "border-color",
                    },
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
                  InputLabelProps={{
                    style: { color: "#f6bc16" },
                  }}
                  className="mt-20"
                />
                <div className="text-right mt-10">
                  <Link to="/forgot-password" className="forget-password">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-20 button-gradient text-white"
                >
                  Log In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
