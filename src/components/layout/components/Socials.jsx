const socialMediaLinks = [
  {
    id: 1,
    class: "icon-facebook text-gradient-vivid-orange",
    href: "https://www.facebook.com/share/14KZUTx85Db/?mibextid=wwXIfr",
  },
  {
    id: 2,
    class: "icon-twitter text-gradient-vivid-orange",
    href: "https://www.tiktok.com/@thebaronaviation?_t=8sFwZu3bfhy&_r=1",
  },
  {
    id: 3,
    class: "icon-instagram text-gradient-vivid-orange",
    href: "https://www.instagram.com/baronaviation?igsh=MTVid3Z6MGxvOHJpYQ==",
  },
  {
    id: 4,
    class: "icon-linkedin text-gradient-vivid-orange",
    href: "https://www.linkedin.com/company/the-baron-aviation",
  },
];

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((elm, i) => {
        if (elm.id === 2) {
          return (
            <a
              key={i}
              href={elm.href}
              target="_blank"
              className="text-gradient-vivid-orange"
            >
              <img src="/svgs/tiktok.svg" width="17px" />
            </a>
          );
        }
        return (
          <a key={i} href={elm.href} className={elm.class} target="_blank"></a>
        );
      })}
    </>
  );
}
