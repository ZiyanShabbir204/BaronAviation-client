import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button, ThemeProvider, createTheme } from "@mui/material";
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
  const [errors, setErrors] = useState({ username: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!username.trim()) formErrors.username = "Username is required";
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({ username: "" });

    try {
      const res = await ApiService.post(`/auth/reset-email`, { username });
      enqueueSnackbar("Email has been sent", { variant: "success" });

      console.log("email res -> ", res);
    } catch (err) {
      console.log("error in email res -> ", err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="mt-header layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-60 md:mb-30">
                <h2 className="text-gradient-vivid-orange">Forgot Password</h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-1 rounded-12 px-60 py-60 md:px-25 md:py-30 bg-dark-grey"
              >
                <TextField
                  id="username"
                  label="Username or Email"
                  variant="standard"
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

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-20 button-gradient text-white"
                >
                  Send Email
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
