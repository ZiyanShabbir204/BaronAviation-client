import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";
import React, { useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import { TextField, Button, MenuItem, Box, Typography } from "@mui/material";
import { Formik, Field, Form, FieldArray } from "formik";
import Grid from "@mui/material/Grid2";
import { useAuth } from "@/contexts/auth.context";
import AttendantTextfield from "./AttendantTextfield";

export default function AttendantForm() {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const adult = searchParam.get("adults");
  const children = searchParam.get("children");
  const start_time = searchParam.get("start_time");
  const to = searchParam.get("to");
  const from = searchParam.get("from");
  const request_return = searchParam.get("request_return") === "true";

  const form = useMemo(() => {
    const adultForms = Array.from({ length: adult }).map((_, idx) => {
      return {
        label: `Information for Adult ${idx + 1}`,
        type: "Adult",
      };
    });
    const childrenForms = Array.from({ length: children }).map((_, idx) => {
      return {
        label: `Information for children ${idx + 1}`,
        type: "children",
      };
    });

    return [...adultForms, ...childrenForms];
  }, [children, adult]);

  const validationSchema = Yup.object().shape({
    attendants: Yup.array().of(
      Yup.object().shape({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        identity_number: Yup.string().required("Identity number is required"),
        gender: Yup.string().required("Gender is required"),
        age: Yup.number()
          .required("Age is required")
          .min(0, "Age must be greater than 0"),
        email: Yup.string().email("Invalid email"),
        weight: Yup.number()
          .required("Passenger Weight is required")
          .min(0, "Passenger Weight must be greater than 0"),
      })
    ),
  });

  const initialValues = {
    attendants: form.map((ele) => ({
      first_name: "",
      last_name: "",
      identity_number: "",
      gender: "",
      age: "",
      email: "",
      weight: "",
      label: ele.label,
      type: ele.type,
    })),
  };

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8 mt-40">
            <h2 className="hero-heading fw-700 text-center mb-30">
              Attendants Information
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                const booking_data = {
                  to,
                  from,
                  start_time,
                  attendants: values.attendants,
                  username: user.username,
                  request_return,
                };
                try {
                  await ApiService.post("/flight-booking", booking_data);
                  enqueueSnackbar("Flight request has been done", {
                    variant: "success",
                  });
                  if (user.role === "cooperate_customer") {
      navigate("/my-booking");
                  } else {
                    navigate("/");
                  }
                } catch (error) {
                  console.log("error in flight booking", error);
                }
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form className="attendant-form">
                  <FieldArray name="attendants">
                    <div>
                      {values.attendants.map((attendant, index) => (
                        <Box sx={{ flexGrow: 1, mb: 2 }}>
                          <Typography
                            marginBottom={2}
                            variant="h6"
                            className="attendant-heading"
                          >
                            {attendant.label}
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid size={6}>
                              <Field
                                as={AttendantTextfield}
                                name={`attendants[${index}].first_name`}
                                label="First Name*"
                                fullWidth
                                error={
                                  touched.attendants?.[index]?.first_name &&
                                  Boolean(
                                    errors.attendants?.[index]?.first_name
                                  )
                                }
                                helperText={
                                  touched.attendants?.[index]?.first_name &&
                                  errors.attendants?.[index]?.first_name
                                }
                                className="attendant-form-field"
                              />
                            </Grid>
                            <Grid size={6}>
                              <Field
                                as={AttendantTextfield}
                                name={`attendants[${index}].last_name`}
                                label="Last Name*"
                                fullWidth
                                error={
                                  touched.attendants?.[index]?.last_name &&
                                  Boolean(errors.attendants?.[index]?.last_name)
                                }
                                helperText={
                                  touched.attendants?.[index]?.last_name &&
                                  errors.attendants?.[index]?.last_name
                                }
                                className="attendant-form-field"
                              />
                            </Grid>

                            <Grid size={6}>
                              <Field
                                as={AttendantTextfield}
                                select
                                name={`attendants[${index}].gender`}
                                label="Gender*"
                                fullWidth
                                error={
                                  touched.attendants?.[index]?.gender &&
                                  Boolean(errors.attendants?.[index]?.gender)
                                }
                                helperText={
                                  touched.attendants?.[index]?.gender &&
                                  errors.attendants?.[index]?.gender
                                }
                                className="attendant-form-field"
                              >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                              </Field>
                            </Grid>

                            <Grid size={6}>
                              <Field
                                as={AttendantTextfield}
                                name={`attendants[${index}].age`}
                                label="Age*"
                                type="number"
                                fullWidth
                                error={
                                  touched.attendants?.[index]?.age &&
                                  Boolean(errors.attendants?.[index]?.age)
                                }
                                helperText={
                                  touched.attendants?.[index]?.age &&
                                  errors.attendants?.[index]?.age
                                }
                                className="attendant-form-field"
                              />
                            </Grid>

                            <Grid size={6}>
                              <Field
                                as={AttendantTextfield}
                                name={`attendants[${index}].weight`}
                                label="Passenger Weight (Kg)*"
                                type="number"
                                fullWidth
                                error={
                                  touched.attendants?.[index]?.weight &&
                                  Boolean(errors.attendants?.[index]?.weight)
                                }
                                helperText={
                                  touched.attendants?.[index]?.weight &&
                                  errors.attendants?.[index]?.weight
                                }
                                className="attendant-form-field"
                              />
                            </Grid>

                            <Grid size={6}>
                              <Field
                                as={AttendantTextfield}
                                name={`attendants[${index}].email`}
                                label="Email"
                                fullWidth
                                error={
                                  touched.attendants?.[index]?.email &&
                                  Boolean(errors.attendants?.[index]?.email)
                                }
                                helperText={
                                  touched.attendants?.[index]?.email &&
                                  errors.attendants?.[index]?.email
                                }
                                className="attendant-form-field"
                              />
                            </Grid>

                            <Grid size={12}>
                              <Field
                                as={AttendantTextfield}
                                name={`attendants[${index}].identity_number`}
                                label="Identity Number*"
                                fullWidth
                                error={
                                  touched.attendants?.[index]
                                    ?.identity_number &&
                                  Boolean(
                                    errors.attendants?.[index]?.identity_number
                                  )
                                }
                                helperText={
                                  (touched.attendants?.[index]
                                    ?.identity_number &&
                                    errors.attendants?.[index]
                                      ?.identity_number) ||
                                  ""
                                }
                                className="attendant-form-field"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      ))}
                    </div>
                  </FieldArray>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button -md button-gradient text-white col-12"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
