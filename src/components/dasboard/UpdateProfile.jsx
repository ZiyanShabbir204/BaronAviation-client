import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useAuth } from "@/contexts/auth.context";
import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";

export default function UpdateProfile() {
  // Formik validation schema
  const { user, fetchUser } = useAuth();

  useEffect(() => {
    if (user) {
      formik.setFieldValue("email");
      formik.setValues({
        email: user.email,
        username: user.username,
        phone: user.phone,
        first_name: user.first_name,
        last_name: user.last_name,
      });
    }
  }, [user]);

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    phone: Yup.string("Enter phone number").matches(
      /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/,
      "Phone number is not valid"
    ),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      username: user?.username || "",
      phone: user?.phone || "",
      email: user?.email || "",
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Form values", values);
      try {
        const res = await ApiService.put("/me/change-profile", {
          phone: values.phone,
          first_name: values.first_name,
          last_name: values.last_name,
        });
        enqueueSnackbar("Password Changed Successfully", {
          variant: "success",
        });
        fetchUser();
        resetForm();
      } catch (error) {
        console.log("error in change profile", error);
      }
      //   alert("Changes saved successfully!");
    },
  });

  return (
    <Box
      sx={{
        mt: 6,
        borderRadius: 2,
        bgcolor: "grey.900",
        boxShadow: 3,
        p: 4,
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Profile Details
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <TextField
              fullWidth
              id="first_name"
              name="first_name"
              label="First Name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
              variant="standard"
              className="change-profile-field"
            />
          </Grid>

          {/* Email */}
          <Grid item md={6}>
            <TextField
              fullWidth
              id="last_name"
              name="last_name"
              label="Last Name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
              variant="standard"
              className="change-profile-field"
            />
          </Grid>
          {/* Username */}

          <Grid item md={6}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              disabled
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              variant="standard"
              className="change-profile-field"
            />
          </Grid>

          {/* Email */}
          <Grid item md={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              disabled
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="standard"
              className="change-profile-field"
            />
          </Grid>
          {/* Phone */}
          <Grid item md={12}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              variant="standard"
              className="change-profile-field"
            />
          </Grid>
        </Grid>

        {/* Save Changes Button */}
        <Box sx={{ mt: 4 }}>
          <button
            className="button -md button-gradient text-white"
            type="submit"
          >
            Save Changes
            <i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
          {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none" }}
          >
            Save Changes
          </Button> */}
        </Box>
      </form>
    </Box>
  );
}
