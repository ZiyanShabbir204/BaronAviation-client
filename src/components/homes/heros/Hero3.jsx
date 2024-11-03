import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import { useSnackbar } from "notistack";

export default function Hero3() {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [flyingPerson, setFlyingPerson] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [errors, setErrors] = useState({
    fromLocation: "",
    toLocation: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const requestHandler = async () => {
    let formErrors = {};
    if (!fromLocation.trim()) {
      formErrors.fromLocation = "from is required";
    }

    // Validate password field
    if (!toLocation.trim()) {
      formErrors.toLocation = "to is required";
    }

    // if (!flyingPerson.trim() && user?.role == "cooperate_customer") {
    //   formErrors.flyingPerson = "Flying Person is required";
    // }

    // Check if there are any errors
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Clear any previous errors
    setErrors({ fromLocation: "", toLocation: "", flyingPerson: "" });

    const bookingData = {
      from: fromLocation,
      to: toLocation,
      start_time: selectedDate,
      // username: user.username,
      flying_person: flyingPerson,
    };

    try {
      // const res =  await axios.post("http://localhost:5000/flight-booking",bookingData)
      // const res = await ApiService.post("/flight-booking", bookingData);
      // console.log("res booking", res);
      setFromLocation("");
      setToLocation("");
      setSelectedDate(dayjs());
      setFlyingPerson("");
      enqueueSnackbar("Flight has been created", {
        variant: "success",
      });
    } catch (err) {
      console.log("Error in FlightRequest -> submitHandler", err);
    }
  };
  // Custom theme with the #eb662b color
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#E5A812", // Set the main color to #eb662b
  //     },
  //   },
  // });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#E5A812", // Set the main color to #eb662b
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              color: "#fff", // Set text color
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#E5A812", // Set icon color
          },
        },
      },
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiOutlinedInput-notchedOutline": {
    //         borderColor: "#9e9e9e", // Default border color
    //       },
    //       "&:hover .MuiOutlinedInput-notchedOutline": {
    //         borderColor: "#66bb6a", // Hover border color
    //       },
    //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //         borderColor: "#4caf50", // Focused border color
    //       },
    //       "&:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline": {
    //         borderColor: "#9e9e9e", // Border color when not focused or hovered
    //       },
    //     },
    //   },
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <section className="hero -type-3">
        <div className="container">
          <div className="row justify-between">
            <div className="col-xl-5 col-lg-5 ">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="hero__subtitle mb-20 md:mb-10 text-vivid-orange"
              >
                Unforgettable Luxury Helicopter Trips
              </div>

              <h1
                className="hero__title text-vivid-orange"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Reimagine Your Leisure Flying Experience with Baron
              </h1>
            </div>

            <div className="col-xl-7 col-lg-7">
              <div className="hero__image">
                <div>
                  <img
                    src="/img/hero/3/image2.jpg"
                    alt="image"
                    style={{
                      borderRadius: "50% 50% 5% 5%",
                    }}
                  />
                  <img
                    src="/img/hero/3/image1.jpg"
                    alt="image"
                    style={{
                      borderRadius: "5% 5% 50% 50%",
                    }}
                  />
                </div>
                <img
                  src="/img/hero/3/image3.jpg"
                  alt="image"
                  style={{ width: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
