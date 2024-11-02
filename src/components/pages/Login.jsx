import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E5A812", // Adjust as per requirement
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
            borderColor: "#E5A812", // Set hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E5A812", // Set focused border color
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
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

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
    // Handle login and navigation
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="mt-header layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-60 md:mb-30">
                <h1 className="text-30 text-vivid-orange">Log In</h1>
                <div className="text-18 fw-500 mt-20 md:mt-15">
                  We're glad to see you again!
                </div>
                <div className="mt-5">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-vivid-orange">
                    Sign Up!
                  </Link>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="border-1 rounded-12 px-60 py-60 md:px-25 md:py-30 bg-gray">
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
                    style: { color: "#E5A812" },
                  }}
                />

                <TextField
                  id="password"
                  label="Password"
                  type="password"
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
                  }}
                  InputLabelProps={{
                    style: { color: "#E5A812" },
                  }}
                  className="mt-20"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className=" bg-vivid-orange button -sm -outline-black mt-30 "
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
