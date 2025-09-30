import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  Popover,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link as ScrollLink, scroller } from "react-scroll";

import { useSnackbar } from "notistack";
import FlightRequestMenu from "@/components/flightRequest/FlightRequestMenu";

export default function Hero3() {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
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

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelerAnchorEl, setTravelerAnchorEl] = useState(null);
  const [errorTravelerMessage, setTravelerMessage] = useState("");

  const dropDownContainer = useRef();

  const scrollToBookNow = () => {
    scroller.scrollTo("bookNow", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight / 3, // Adjusts the offset to center
    });
  };

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
      formErrors.fromLocation = "Flying From field is Required";
    }

    // Validate password field
    if (!toLocation.trim()) {
      formErrors.toLocation = "Flying To field is Required";
    }

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
  //       main: "#f6bc16", // Set the main color to #eb662b
  //     },
  //   },
  // });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f6bc16", // Adjust as per requirement
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: "white", // Set text color to white
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // Set default border color to white
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f6bc16", // Set hover border color
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f6bc16", // Set focused border color
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "white", // Set label text color to white
          },
        },
      },
    },
  });

  const handleTravelerClick = (event) => {
    setTravelerAnchorEl(event.currentTarget);
  };

  const handleTravelerClose = () => {
    setTravelerAnchorEl(null);
  };

  const handleIncrease = (setter, value) => {
    if (adults + children < 5) {
      setter(value + 1);
    } else {
      setTravelerMessage("Only up to 5 travelers are allowed.");
    }
  };

  const handleDecrease = (setter, value) => {
    if (value > 0 && adults + children > 1) {
      setter(value - 1);
      setTravelerMessage("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="hero -type-3">
        <div className="container" style={{}}>
          <div
            className="row justify-between"
            style={{ position: "relative", zIndex: 6 }}
          >
            <div className="col-xl-5 col-lg-5 header-custom">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="hero__subtitle mb-20 md:mb-10 text-white"
              >
                Unforgettable Helicopter Trips
              </div>

              <h1
                className="hero__title text-vivid-orange  mb-20 md:mb-10"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Luxury Travel Redefined
              </h1>
              {/* <Link
              to="#bookNow"
              className="button -sm -outline-black rounded-200 text-black  bg-vivid-orange"
            >
              Book Now
            </Link> */}

              <button
                onClick={scrollToBookNow}
                className="button -sm -outline-black rounded-200 text-black book-now-btn bg-vivid-orange"
              >
                Book Now
              </button>
            </div>
            <div
              className="col-xl-7 col-lg-7"
              style={{
                position: "relative",
                paddingTop: "100px",
                paddingBottom: "60px",
              }}
            >
              <div className="image-bar"></div>

              <img
                src="/img/hero/3/heli-light-blue.png"
                alt="heli"
                style={{ position: "relative", zIndex: 6 }}
              />
            </div>
          </div>
        </div>
      </section>
      <FlightRequestMenu />
    </ThemeProvider>
  );
}
