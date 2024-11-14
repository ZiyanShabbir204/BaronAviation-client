export default function ContactForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className=" hero-heading fw-700 text-center mb-30">
              Leave us your info
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
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Email"
                    required
                    className="contact-form-field"
                  />
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
