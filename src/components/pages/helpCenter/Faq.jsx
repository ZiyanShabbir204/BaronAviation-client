import { faqData } from "@/data/tourSingleContent";
import React, { useState } from "react";
import Hero from "./Hero";
const faqs = [
  {
    question: "What services do you offer?",
    answer: (
      <>
        We provide{" "}
        <span className="text-vivid-orange">
          luxury private charter helicopter services{" "}
        </span>{" "}
        for a variety of purposes, including:
        <ul>
          <li>Executive and corporate travel</li>
          <li>VIP and private tours</li>
          <li>Weddings and special events</li>
          <li>Aerial photography and filming</li>
          <li>Scenic tours and sightseeing</li>
          <li>Emergency lifesaving medicine delivery</li>
        </ul>
      </>
    ),
  },
  {
    question: "How many passengers can the helicopter accommodate?",
    answer: (
      <>
        {" "}
        Our <span className="text-vivid-orange">luxury helicopters</span> can
        accommodate up to{" "}
        <span className="text-vivid-orange">five (5) passengers.</span>
      </>
    ),
  },
  {
    question: "Is it safe to travel by helicopter in Pakistan?",
    answer: (
      <>
        {" "}
        Yes,{" "}
        <span className="text-vivid-orange">safety is our top priority</span>.
        We adhere to{" "}
        <span className="text-vivid-orange">
          strict international aviation standards
        </span>{" "}
        and employ{" "}
        <span className="text-vivid-orange">highly trained pilots</span> with
        extensive experience. Our helicopters undergo{" "}
        <span className="text-vivid-orange">
          regular maintenance and inspections
        </span>{" "}
        to ensure{" "}
        <span className="text-vivid-orange">
          optimal performance and safety
        </span>
        .
      </>
    ),
  },
  {
    question: "What is the cost of chartering a helicopter?",
    answer: (
      <>
        The cost varies depending on several factors, including:
        <ul>
          <li>Distance and flight duration</li>
          <li>Type of helicopter</li>
          <li>Purpose of the flight (e.g., tourism, corporate, medical)</li>
          <li>
            Additional services requested (e.g., catering, ground
            transportation)
          </li>
        </ul>
        <br />
        For a <span className="text-vivid-orange">personalized quote</span>{" "}
        tailored to your needs, please contact us directly.
      </>
    ),
  },
  {
    question: "How do I book a private helicopter charter?",
    answer: (
      <>
        Booking is{" "}
        <span className="text-vivid-orange">simple and hassle-free</span>:
        <ul>
          <li>
            <span className="text-vivid-orange">Contact us</span> via phone,
            email, or our website.
          </li>
          <li>
            <span className="text-vivid-orange">
              Provide your travel details
            </span>{" "}
            (dates, destinations, number of passengers, etc.).
          </li>
          <li>
            <span className="text-vivid-orange">
              {" "}
              Book through our website's booking portal at
            </span>{" "}
            <a href="https://www.thebaronaviation.com">
              www.thebaronaviation.com
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What happens in case of bad weather?",
    answer: (
      <>
        Your <span className="text-vivid-orange">safety is our priority</span>.
        In case of{" "}
        <span className="text-vivid-orange">adverse weather conditions</span>,
        we will:
        <ul>
          <li>
            <span className="text-vivid-orange">Reschedule your flight</span> at
            the earliest convenience.{" "}
          </li>
          <li>
            <span className="text-vivid-orange">
              Provide alternative arrangements
            </span>
            (if applicable).
          </li>
          <li>
            <span className="text-vivid-orange"> Keep you informed </span> about
            any changes in real-time.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Can I charter a helicopter for a wedding or special event?",
    answer: (
      <>
        Absolutely! Our{" "}
        <span className="text-vivid-orange">luxury helicopters</span>. are
        perfect for making your{" "}
        <span className="text-vivid-orange">special day unforgettable</span>. We
        offer <span className="text-vivid-orange">customized packages</span> for
        weddings, proposals, and other celebrations, including:
        <ul>
          <li>
            <span className="text-vivid-orange">Aerial photography</span>{" "}
          </li>
          <li>
            <span className="text-vivid-orange">Exclusive flight routes</span>
            (as per Pakistani aviation laws).
          </li>
          <li>
            <span className="text-vivid-orange">
              {" "}
              Personalized decoration and onboard experiences{" "}
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Are your pilots experienced?",
    answer: (
      <>
        {" "}
        Yes, our pilots are{" "}
        <span className="text-vivid-orange">
          highly trained and experienced
        </span>
        , with{" "}
        <span className="text-vivid-orange"> thousands of flight hours </span>{" "}
        in diverse conditions. They are
        <span className="text-vivid-orange">
          {" "}
          certified by the Civil Aviation Authority (CAA) of Pakistan{" "}
        </span>
        and other{" "}
        <span className="text-vivid-orange">
          {" "}
          international aviation bodies
        </span>
        .{" "}
      </>
    ),
  },
  {
    question: "Do you offer scenic tours of Pakistan’s northern areas?",
    answer: (
      <>
        Yes! We specialize in{" "}
        <span className="text-vivid-orange">scenic tours</span>. of Pakistan’s
        most beautiful{" "}
        <span className="text-vivid-orange">northern regions</span>, including:
        <ul>
          <li>Hunza Valley</li>
          <li>Skardu</li>
          <li>Fairy Meadows</li>
          <li>Naltar Valley</li>
          <li>Naran & Kaghan</li>
        </ul>
        Contact us for a{" "}
        <span className="text-vivid-orange">customized sightseeing tour!</span>
      </>
    ),
  },
  {
    question: "How far in advance should I book?",
    answer: (
      <>
        We recommend{" "}
        <span className="text-vivid-orange">
          booking at least 7-14 days in advance
        </span>{" "}
        to ensure availability. For{" "}
        <span className="text-vivid-orange">peak seasons</span> (such as summer
        tourism or wedding season), booking{" "}
        <span className="text-vivid-orange">3-4 weeks in advance</span> is
        advisable.
      </>
    ),
  },
  {
    question: "Can I bring children or pets on board?",
    answer: (
      <>
        <ul>
          <li>
            <span className="text-vivid-orange">Children:</span> Yes, children
            are <span className="text-vivid-orange"> welcome on board</span>,
            and we provide{" "}
            <span className="text-vivid-orange">special safety measures</span>{" "}
            for younger passengers.{" "}
          </li>
          <li>
            <span className="text-vivid-orange">Pets: </span>Pets{" "}
            <span className="text-vivid-orange">may be allowed </span>on a
            case-by-case basis, subject to{" "}
            <span className="text-vivid-orange">
              prior approval and additional safety arrangements
            </span>
            .
          </li>
        </ul>
        <br />
        Contact us for a{" "}
        <span className="text-vivid-orange">customized sightseeing tour!</span>
      </>
    ),
  },
  {
    question: "How can I contact you for more information?",
    answer: (
      <>
        You can reach us via:
        <ul>
          <li>
            📞 <b> Phone Numbers</b>:
            <ul>
              <li>
                {" "}
                <span className="text-vivid-orange">Cell:</span> +92-326-0000121
              </li>
              <li>
                {" "}
                <span className="text-vivid-orange">Landline:</span> +92 51
                6110971
              </li>
              <li>
                {" "}
                <span className="text-vivid-orange">UAN: </span>111111331
              </li>
            </ul>
          </li>
          <li>
            📧 <b>Email:</b> support@thebaronaviation.com
          </li>
          <li>
            🌐 <b>Website: </b>
            <a href="https://www.thebaronaviation.com">
              www.thebaronaviation.com
            </a>
          </li>
          <li>
            📱 <b> Social Media:</b>
            <ul>
              <li>
                <span className="text-vivid-orange">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/company/the-baron-aviation"
                  target="_blank"
                >
                  Baron Aviation
                </a>
              </li>
              <li>
                <span className="text-vivid-orange">Facebook:</span>{" "}
                <a
                  href="https://www.facebook.com/BaronAviation/"
                  target="_blank"
                >
                  Baron Aviation
                </a>
              </li>
              <li>
                <span className="text-vivid-orange">Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/thebaronaviation/"
                  target="_blank"
                >
                  @thebaronaviation
                </a>
              </li>
              <li>
                <span className="text-vivid-orange">Twitter (X):</span>{" "}
                <a href="https://x.com/baronaviationpk" target="_blank">
                  @baronaviationpk
                </a>
              </li>
              <li>
                <span className="text-vivid-orange">YouTube:</span>{" "}
                <a
                  href="https://www.youtube.com/@TheBaronAviation"
                  target="_blank"
                >
                  Baron Aviation
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
];

export default function Faq() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="row justify-center pt-40">
          <div className="col-xl-8 col-lg-10">
            <div className="accordion -simple row y-gap-20 js-accordion">
              {faqs.map((elm, i) => (
                <div key={i} className="col-12">
                  <div
                    className={`accordion__item faq px-20 py-15 border-1 rounded-12 ${
                      currentActiveFaq == i ? "is-active" : ""
                    } `}
                  >
                    <div
                      className="accordion__button d-flex items-center justify-between"
                      onClick={() =>
                        setCurrentActiveFaq((pre) => (pre == i ? -1 : i))
                      }
                    >
                      <div
                        className="button text-16 text-dark-1"
                        style={{ fontWeight: 600 }}
                      >
                        {elm.question}
                      </div>

                      <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                        <i className="icon-plus"></i>
                        <i className="icon-minus"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        currentActiveFaq == i ? { maxHeight: "380px" } : {}
                      }
                    >
                      <div className="pt-20">{elm.answer} </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
