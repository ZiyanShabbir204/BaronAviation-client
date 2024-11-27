import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      type: "",
      gender: "",
      title: "",
      dob: "",
      identityNumber: "",
      nationality: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      type: Yup.string().required("Type is required"),
      gender: Yup.string().required("Gender is required"),
      title: Yup.string().required("Title is required"),
      dob: Yup.date().required("Date of birth is required"),
      identityNumber: Yup.string().required("Identity number is required"),
      nationality: Yup.string().required("Nationality is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div className="attendant-form">
      <h2>Attendant 1</h2>
      <form onSubmit={formik.handleSubmit} className="row y-gap-30">
        {/* Row 1: First Name and Last Name */}
        <div className="col-md-6">
          <TextField
            id="outlined-basic"
            label="First Name"
            className="attendat-input"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            fullWidth
          />
        </div>
        <div className="col-md-6">
          <TextField
            label="Last Name"
            name="lastName"
            className="attendat-input"
            id="outlined-basic"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            fullWidth
          />
        </div>

        {/* Row 2: Type and Gender */}
        <div className="col-md-6">
          <FormControl fullWidth className="attendant-select">
            <InputLabel>Title</InputLabel>
            <Select
              name="title"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}

            >
              <MenuItem value="mr">Mr.</MenuItem>
              <MenuItem value="mrs">Mrs.</MenuItem>
              <MenuItem value="miss">Miss</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-md-6">
          <FormControl fullWidth className="attendant-select">
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Row 3: Title and DOB */}
        {/* <div className="col-md-6">
      
        </div>
        <div className="col-md-6">
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </div> */}

        {/* Row 4: Identity Number and Nationality */}
        {/* <div className="col-md-6">
          <TextField
            label="Identity Number"
            name="identityNumber"
            className="ammar"
            value={formik.values.identityNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.identityNumber &&
              Boolean(formik.errors.identityNumber)
            }
            helperText={
              formik.touched.identityNumber && formik.errors.identityNumber
            }
            fullWidth
          />
        </div>
        <div className="col-md-6">
          <TextField
            label="Nationality"
            name="nationality"
            value={formik.values.nationality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.nationality && Boolean(formik.errors.nationality)
            }
            helperText={formik.touched.nationality && formik.errors.nationality}
            fullWidth
          />
        </div> */}

        {/* Submit Button */}
        <div className="col-12">
          <TextField
            label="Identity Number"
            name="identityNumber"
            className="attendat-input"
            value={formik.values.identityNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.identityNumber &&
              Boolean(formik.errors.identityNumber)
            }
            helperText={
              formik.touched.identityNumber && formik.errors.identityNumber
            }
            fullWidth
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
