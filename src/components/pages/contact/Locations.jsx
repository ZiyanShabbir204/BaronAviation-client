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
          <div>
            <div className="px-30 text-center">
              <h3 className="text-30 md:text-24 fw-700 text-gradient-vivid-orange">
                The Baron Aviation Office:
              </h3>

              <div className="mt-20 md:mt-10">
                3rd Floor, Interactive Plaza, Sector E-11/3 Markaz, Islamabad
                <br />
                <div>
                  {" "}
                  <b>UAN NUMBER:</b> 111111331
                </div>
                <div>
                  <b>WHATSAPP NUMBER:</b> +92 326 0000227{" "}
                </div>
                <div>
                  <b> OFFICE TELEPHONE DIRECT LAND LINE NUMBER:</b> +92 51
                  6110971
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
