const sections = [
  {
    title: "Company",
    links: [
      { id: 1, text: "About Us", href: "/our-vision" },
      { id: 5, text: "Terms & Conditions", href: "/terms-and-conditions" },
      { id: 7, text: "FAQs", href: "/faqs" },
      { id: 8, text: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: 9, text: "Get in Touch", href: "/contact" },
      { id: 10, text: "Help center", href: "/help-center" },
    ],
  },
  {
    title: "Across Borders",
    links: [
      {
        id: 19,
        text: "DoubleTree by Hilton Nathiagali",
        href: "https://www.hilton.com/en/hotels/isbnadi-doubletree-nathiagali/",
      },
      {
        id: 120,
        text: "The Baron Hotels",
        href: "https://www.thebaronhotels.com/",
      },
      {
        id: 111,
        text: "Karbala – Iraq",
        href: "https://www.thebaronhotels.com/",
      },
      {
        id: 11,
        text: "Afghanistan – Kabul",
        href: "https://www.thebaronhotels.com/",
      },
      {
        id: 11,
        text: "Lodges By Baron",
        href: "https://www.lodgesbybaron.com/",
      },
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto col-6">
          <h4 className="text-20 fw-500 text-gradient-vivid-orange">
            {elm.title}
          </h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <a
                key={i2}
                className="d-block fw-500"
                target={
                  elm.title === "Serving Across Borders" ? "_blank" : "_top"
                }
                href={elm2.href}
              >
                {elm2.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
