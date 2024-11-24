import { useState } from "react";
import { tourDataTwo } from "@/data/tours";
import SelectWithSearch from "../uiElements/SelectWithSearch";
import { useSearchParams } from "react-router-dom";
import ApiService from "@/api.service";
import { enqueueSnackbar } from "notistack";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const tour = searchParams.get("tour");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tour: tour || "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const ddoptions = tourDataTwo.map((d, idx) => ({
    id: idx,
    label: d.title,
    value: d.title,
  }));

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\+92\d{10}$/; // +92 followed by 10 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must start with +92 and have 12 digits.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format. Example: abc@gmail.com";
    }
    if (!formData.tour) {
      newErrors.tour = "Please select a tour.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors = form is valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await ApiService.post("/contact/tour-request",formData)
        enqueueSnackbar("Your response has been submitted",{variant:"success"})
        setFormData({ name: "", phone: "", email: "", message: "" ,tour:""}); // Reset form
        
        
      } catch (error) {
        enqueueSnackbar(error.response.data.message,{variant:"success"})
        
      }
      // alert("Form submitted successfully!");
      // console.log("Form Data:", formData);
      // setFormData({
      //   name: "",
      //   phone: "",
      //   email: "",
      //   tour: "",
      //   message: "",
      // }); // Reset form
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTourChange = (value) => {
    setFormData({
      ...formData,
      tour: value,
    });
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
              <form onSubmit={handleSubmit} className="row y-gap-30">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`contact-form-field ${
                      errors.name ? "error-field" : ""
                    }`}
                  />
                  {errors.name && <small className="error-text">{errors.name}</small>}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className={`contact-form-field ${
                      errors.phone ? "error-field" : ""
                    }`}
                  />
                  {errors.phone && <small className="error-text">{errors.phone}</small>}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`contact-form-field ${
                      errors.email ? "error-field" : ""
                    }`}
                  />
                  {errors.email && <small className="error-text">{errors.email}</small>}
                </div>
                <div className="col-md-6">
                  <SelectWithSearch
                    ddoptions={ddoptions}
                    defaultValue={formData.tour}
                    onChange={handleTourChange}
                    className={`contact-form-field ${
                      errors.tour ? "error-field" : ""
                    }`}
                  />
                  {errors.tour && <small className="error-text">{errors.tour}</small>}
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="6"
                    className={`contact-form-field ${
                      errors.message ? "error-field" : ""
                    }`}
                  ></textarea>
                  {errors.message && (
                    <small className="error-text">{errors.message}</small>
                  )}
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button -md button-gradient text-white col-12"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .error-field {
            border-color: red;
          }
          .error-text {
            color: red;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: block;
          }
        `}
      </style>
    </section>
  );
}
