const sections = [
  {
    title: "Company",
    links: [
      { id: 1, text: "About Us", href: "/our-vision" },
      { id: 5, text: "Term & Condition", href: "/term-condition" },
      { id: 7, text: "FAQs", href: "/faqs" },
      { id: 8, text: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: 9, text: "Get in Touch", href: "/contact" },
      { id: 10, text: "Help center", href: "#" },
      { id: 11, text: "Live chat", href: "#" },
    ],
  },
  {
    title: "Serving Across Borders",
    links: [
      {
        id: 19,
        text: "Najaf-al-ashraf",
        href: "https://www.thebaronhotels.com/najaf-al-ashraf",
      },
      {
        id: 120,
        text: "Karbala-e-muqaddasa",
        href: "https://www.thebaronhotels.com/karbala-e-muqaddasa",
      },
      {
        id: 111,
        text: "Samarra",
        href: "https://www.thebaronhotels.com/samarra",
      },
      {
        id: 11,
        text: "Baghdad",
        href: "https://www.thebaronhotels.com/baghdad",
      },
      { id: 11, text: "Kufa", href: "https://www.thebaronhotels.com/kufa" },
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
