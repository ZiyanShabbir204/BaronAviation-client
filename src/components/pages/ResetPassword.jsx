import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TextField, Button, ThemeProvider, createTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";
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
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ password: "", confirm_password: "" });
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!password.trim()) formErrors.password = "Password is required";
    if (!confirm_password.trim())
      formErrors.confirm_password = "ConfirmPassword is required";
    if (confirm_password !== password)
      formErrors.confirm_password = "Password should match";
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({ password: "", confirm_password: "" });

    try {
      const res = await ApiService.post(`/auth/reset-password?token=${token}`, {
        password,
      });
      console.log("res in reset email", res);
      enqueueSnackbar("Your password has been reset successfully", {
        variant: "success",
      });
      navigate("/login");
    } catch (err) {
      enqueueSnackbar(err.message, {
        variant: "error",
      });
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
                <h2 className="text-gradient-vivid-orange">Reset Password</h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="border-1 rounded-12 px-60 py-60 md:px-25 md:py-30 bg-dark-grey"
              >
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="standard"
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
                    style: { color: "#f6bc16" },
                  }}
                />

                <TextField
                  id="confirm_password"
                  label="ConfirmPassword"
                  type="password"
                  variant="standard"
                  fullWidth
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={Boolean(errors.confirm_password)}
                  helperText={errors.confirm_password}
                  InputProps={{
                    style: { color: "white" },
                    classes: {
                      notchedOutline: "border-color",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#f6bc16" },
                  }}
                  className="mt-20"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-20 button-gradient text-white"
                >
                  Reset
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
