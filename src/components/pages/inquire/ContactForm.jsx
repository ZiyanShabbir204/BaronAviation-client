import { tourDataTwo } from "@/data/tours";
import SelectWithSearch from "../uiElements/SelectWithSearch";
import { useSearchParams } from "react-router-dom";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const tour = searchParams.get("tour");
  const ddoptions = tourDataTwo.map((d, idx) => ({
    id: idx,
    label: d.title,
    value: d.title,
  }));
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className=" hero-heading fw-700 text-center mb-30">
              Plan Your Tour
            </h2>

            <div className="contactForm">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="row y-gap-30"
              >
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="contact-form-field"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Phone"
                    required
                    className="contact-form-field"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Email"
                    required
                    className="contact-form-field"
                  />
                </div>
                <div className="col-md-6">
                  <SelectWithSearch ddoptions={ddoptions} defaultValue={tour} />
                </div>
                <div className="col-12">
                  <textarea
                    placeholder="Message"
                    rows="6"
                    required
                    className="contact-form-field"
                  ></textarea>
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
    </section>
  );
}
