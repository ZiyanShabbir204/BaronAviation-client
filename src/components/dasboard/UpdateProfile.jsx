import React, { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useAuth } from "@/contexts/auth.context";
import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";

export default function UpdateProfile() {
  // Formik validation schema
  const { user ,fetchUser} = useAuth();

  useEffect(() => {
    if (user) {
      formik.setFieldValue("email");
      formik.setValues({
        email: user.email,
        username: user.username,
        phone: user.phone,
      });
    }
  }, [user]);

  const validationSchema = Yup.object({
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
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Form values", values);
      try {
        const res = await ApiService.put("/me/change-profile", {
          phone: values.phone,
        });
        enqueueSnackbar("Password Changed Successfully", {
          variant: "success",
        });
        fetchUser()
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
          {/* Username */}
          <Grid item md={12}>
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
              variant="outlined"
            />
          </Grid>

          {/* Email */}
          <Grid item md={12}>
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
              variant="outlined"
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
              variant="outlined"
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
