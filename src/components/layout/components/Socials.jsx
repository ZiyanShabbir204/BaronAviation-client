const socialMediaLinks = [
  { id: 1, class: "icon-facebook text-gradient-vivid-orange", href: "#" },
  { id: 2, class: "icon-twitter text-gradient-vivid-orange", href: "#" },
  { id: 3, class: "icon-instagram text-gradient-vivid-orange", href: "#" },
  { id: 4, class: "icon-linkedin text-gradient-vivid-orange", href: "#" },
];

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((elm, i) => (
        <a key={i} href={elm.href} className={elm.class}></a>
      ))}
    </>
  );
}
