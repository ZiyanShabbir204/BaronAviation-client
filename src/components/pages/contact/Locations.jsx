import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import { Stack } from "@mui/material";
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
        <div
          className="row y-gap-30"
          style={{
            width: "100%",
          }}
        >
          <div>
            <div className="text-center">
              <h3 className="text-30 md:text-24 fw-700 text-gradient-vivid-orange">
                Cleared for Contact – Let’s Talk Aviation
              </h3>

              <div className="mt-20 md:mt-10">
                <Stack
                  gap={2}
                  sx={{
                    fontSize: "16px",
                  }}
                  alignItems="center"
                >
                  <div
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      maxWidth: "585px",
                    }}
                  >
                    <LocationCityIcon
                      className="path-color-yellow"
                      sx={{
                        marginRight: 1,
                      }}
                    />{" "}
                    3rd Floor, Interactive Plaza, Sector E-11/3 Markaz,
                    Islamabad
                  </div>
                  <Stack
                    direction="row"
                    width="100%"
                    maxWidth="585px"
                    justifyContent="space-around"
                    gap={1}
                  >
                    {/* <div>
                      <CallOutlinedIcon
                        sx={{
                          marginRight: 1,
                        }}
                        className="path-color-yellow"
                      />
                      111-111-331
                    </div> */}
                    <div>
                      <WhatsAppIcon
                        sx={{
                          marginRight: 1,
                        }}
                        className="path-color-yellow"
                      />
                      +92 326 0000121
                    </div>
                    <div>
                      <RingVolumeIcon
                        sx={{
                          marginRight: 1,
                        }}
                        className="path-color-yellow"
                      />
                      +92 51 6110971
                    </div>
                  </Stack>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
