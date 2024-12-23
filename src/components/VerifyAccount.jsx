import { useEffect, useState } from "react";
import { CircularProgress, Typography, ThemeProvider, createTheme, Box } from "@mui/material";
import { CheckCircle, Error as ErrorIcon } from "@mui/icons-material"; // Icons for success and error
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/auth.context";
import ApiService from "@/api.service";

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

export default function VerifyAccount() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Your Account is verified successfully");
  const [isError, setIsError] = useState(false); // To track success or error
  const token = searchParams.get("token");
  const { saveUser } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    apiHandler();
  }, []);

  const apiHandler = async () => {
    try {
      const res = await ApiService.get(`/auth/verify-account?token=${token}`);
      saveUser(res);
      navigate("/")
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred during verification");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <section className="mt-header layout-pt-lg layout-pb-lg" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <div style={{ textAlign: "center" }}>
            <CircularProgress color="primary" />
            <Typography variant="h6" style={{ marginTop: "16px", color: "white" }}>
              Verifying...
            </Typography>
          </div>
        </section>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <section className="mt-header layout-pt-lg layout-pb-lg" style={{ display: "flex", justifyContent: "center", height: "32vh" }}>
        <Box textAlign="center">
          {isError ? (
            <Box display="flex" flexDirection="row" alignItems="center">
              <ErrorIcon color="error" style={{ fontSize: 60 }} />
              <Typography variant="h5" color="error" style={{ fontWeight: "bold", marginTop: "16px" }}>
                {message}
              </Typography>
            </Box>
          ) : (
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography variant="h5"  style={{ fontWeight: "bold", marginTop: "16px" }}>
                {message}
              </Typography>
            </Box>
          )}
        </Box>
      </section>
    </ThemeProvider>
  );
}
