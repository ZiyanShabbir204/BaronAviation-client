import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  phone: Yup.string()
    .matches(
      /^\+\d{12}$/,
      "Enter phone number with country code (e.g., +923012345678)"
    )
    .required("Phone number is required."),
  email: Yup.string()
    .email("Invalid email format. ")
    .required("Email is required."),
  message: Yup.string().required("Message is required."),
});

export default function ContactForm() {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const res = await ApiService.post("/contact", values);
      enqueueSnackbar("Your response has been submitted", {
        variant: "success",
      });
      resetForm(); // ✅ Reset fields after success
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || "Something went wrong", {
        variant: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="layout-pt-lg layout-pb-sm">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="hero-heading fw-700 text-center mb-30">
              Leave us your info
            </h2>

            <div className="contactForm">
              <Formik
                initialValues={{ name: "", phone: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting, setFieldValue }) => (
                  <Form className="row y-gap-30">
                    <div className="col-md-6">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={`contact-form-field ${
                          errors.name && touched.name ? "error-field" : ""
                        }`}
                      />
                      {errors.name && touched.name && (
                        <small className="error-text">{errors.name}</small>
                      )}
                    </div>
                    <div className="col-md-6">
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={(e) => {
                          let value = e.target.value.replace(/[^0-9+]/g, "");

                          console.log("value", value);
                          if (value.length > 13) {
                            value = value.slice(0, 13);
                          }

                          setFieldValue("phone", value);
                        }}
                        className={`contact-form-field ${
                          errors.phone && touched.phone ? "error-field" : ""
                        }`}
                      />
                      {!errors.phone && (
                        <small>
                          Enter phone number with country code (e.g.,
                          +923012345678)
                        </small>
                      )}
                      {errors.phone && touched.phone && (
                        <small className="error-text">{errors.phone}</small>
                      )}
                    </div>
                    <div className="col-12">
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        className={`contact-form-field ${
                          errors.email && touched.email ? "error-field" : ""
                        }`}
                      />
                      {errors.email && touched.email && (
                        <small className="error-text">{errors.email}</small>
                      )}
                    </div>
                    <div className="col-12">
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        rows="6"
                        className={`contact-form-field ${
                          errors.message && touched.message ? "error-field" : ""
                        }`}
                      />
                      {errors.message && touched.message && (
                        <small className="error-text">{errors.message}</small>
                      )}
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="button -md button-gradient text-white col-12"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .error-field {
            border-color: #bd6565 !important;
          }
          .error-text {
            color: #bd6565 !important;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: block;
          }
        `}
      </style>
    </section>
  );
}
