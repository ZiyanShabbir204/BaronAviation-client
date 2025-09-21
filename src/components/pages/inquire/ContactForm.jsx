import { useSearchParams } from "react-router-dom";
import { tourDataTwo } from "@/data/tours";
import SelectWithSearch from "../uiElements/SelectWithSearch";
import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// ✅ Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  phone: Yup.string()
    .matches(
      /^\+92\d{10}$/,
      "Enter phone number with country code (e.g., +923012345678)"
    )
    .required("Phone number is required."),
  email: Yup.string()
    .email("Invalid email format. ")
    .required("Email is required."),
  tour: Yup.string().required("Please select a tour."),
  message: Yup.string().required("Message is required."),
});

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const tour = searchParams.get("tour");

  // Dropdown options
  const ddoptions = tourDataTwo.map((d, idx) => ({
    id: idx,
    label: d.title,
    value: d.title,
  }));

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await ApiService.post("/contact/tour-request", values);
      enqueueSnackbar("Your response has been submitted", {
        variant: "success",
      });
      resetForm();
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || "Something went wrong", {
        variant: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="hero-heading fw-700 text-center mb-30">
              Plan Your Tour
            </h2>

            <div className="contactForm">
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  email: "",
                  tour: tour || "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, values, setFieldValue, isSubmitting }) => (
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
                        className={`contact-form-field ${
                          errors.phone && touched.phone ? "error-field" : ""
                        }`}
                      />
                      {!errors.phone && (
                        <small>
                          Add phone number with +92 (e.g., +923001234567)
                        </small>
                      )}

                      {errors.phone && touched.phone && (
                        <small className="error-text">{errors.phone}</small>
                      )}
                    </div>

                    <div className="col-md-6">
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

                    <div className="col-md-6">
                      <SelectWithSearch
                        ddoptions={ddoptions}
                        defaultValue={values.tour}
                        onChange={(val) => setFieldValue("tour", val)}
                        className={`contact-form-field ${
                          errors.tour && touched.tour ? "error-field" : ""
                        }`}
                      />
                      {errors.tour && touched.tour && (
                        <small className="error-text">{errors.tour}</small>
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
