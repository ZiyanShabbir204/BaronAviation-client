const locations = [
  {
    id: 1,
    title: "Karachi",
    address: "Plot 10, Interactive Plaza, E-11/13, Islamabad, Pakistan",
    contact: "0000-0000000",
  },
  {
    id: 2,
    title: "Lahore",
    address: "Plot 10, Interactive Plaza, E-11/13, Islamabad, Pakistan",
    contact: "0000-0000000",
  },
  {
    id: 3,
    title: "Islamabad",
    address: "Plot 10, Interactive Plaza, E-11/13, Islamabad, Pakistan",
    contact: "0000-0000000",
  },
];

export default function Locations() {
  return (
    <section className="layout-pt-lg">
      <div
        className="container"
        style={{
          maxWidth: "1000px",
        }}
      >
        <div className="row y-gap-30">
          {locations.map((elm, i) => (
            <div key={i} className="col-lg-4 col-sm-4">
              <div className="px-30 text-center">
                <h3 className="text-30 md:text-24 fw-700 text-gradient-vivid-orange">
                  {elm.title}
                </h3>

                <div className="mt-20 md:mt-10">
                  {elm.address}
                  <br />
                  {elm.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
