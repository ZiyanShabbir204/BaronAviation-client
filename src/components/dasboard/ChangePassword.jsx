import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";

const ChangePassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [error, setError] = useState();

  const validationSchema = Yup.object({
    old_password: Yup.string().required("Old password is required"),
    new_password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("New password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("new_password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleShowNewPassword = () => setShowNewPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);
  const handleShowOldPassword = () => setShowOldPassword((prev) => !prev);

  return (
    <Box
    //   sx={{
    //     borderRadius: "12px",
    //     backgroundColor: "#2E2E2E",
    //     boxShadow: 2,
    //     p: 4,
    //     mt: 3,
    //     color: "#fff",
    //   }}
    >
      {console.log("error", error)}
      <Typography
        variant="h6"
        sx={{ fontWeight: 100, marginBottom: 3, borderRadius: "10px" }}
      >
        Change Password
      </Typography>
      {error && (
        <Typography variant="h5" className="error-heading">
          {error}
        </Typography>
      )}

      <Formik
        initialValues={{
          old_password: "",
          new_password: "",
          confirm_password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await ApiService.post("/me/change-password", {
              new_password: values.new_password,
              old_password: values.old_password,
            });
            enqueueSnackbar("Password Changed Successfully", {
              variant: "success",
            });
            resetForm();
            setError("");

            console.log("message", res);
          } catch (error) {
            console.log("error in change password ->", error);
            setError(error.response.data.message);
          }
          console.log("Form values", values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box sx={{ mb: 3 }}>
              <Field
                as={TextField}
                name="old_password"
                label="Old Password"
                fullWidth
                variant="outlined"
                type={showOldPassword ? "text" : "password"}
                error={touched.old_password && Boolean(errors.old_password)}
                helperText={touched.old_password && errors.old_password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowOldPassword}
                        edge="end"
                        className="password-visibility-button"
                      >
                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Field
                as={TextField}
                name="new_password"
                label="New Password"
                fullWidth
                variant="outlined"
                type={showNewPassword ? "text" : "password"}
                error={touched.new_password && Boolean(errors.new_password)}
                helperText={touched.new_password && errors.new_password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowNewPassword}
                        edge="end"
                        className="password-visibility-button"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Field
                as={TextField}
                name="confirm_password"
                label="Confirm New Password"
                fullWidth
                variant="outlined"
                type={showConfirmPassword ? "text" : "password"}
                error={
                  touched.confirm_password && Boolean(errors.confirm_password)
                }
                helperText={touched.confirm_password && errors.confirm_password}
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
              />
            </Box>

            <button
              className="button -md button-gradient text-white"
              type="submit"
            >
              Change Password
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ChangePassword;
