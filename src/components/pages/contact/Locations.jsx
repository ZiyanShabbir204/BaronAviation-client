const locations = [
  {
    id: 1,
    title: "Islamabad",
    address: "3rd Floor, Interactive Plaza, Sector E-11/3 Markaz",
    contact: "+92-51-6110971",
  },
];

export default function Locations() {
  return (
    <section className="layout-pt-lg">
      <div
        className="container"
        style={{
          maxWidth: "1000px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="row y-gap-30">
          {locations.map((elm, i) => (
            <div key={i}>
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
