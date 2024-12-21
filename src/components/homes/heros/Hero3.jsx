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
      formErrors.fromLocation = "from is required";
    }

    // Validate password field
    if (!toLocation.trim()) {
      formErrors.toLocation = "to is required";
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
        main: "#f6bc16", // Set the main color to #eb662b
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
            color: "#f6bc16", // Set icon color
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

      {/* <div
        ref={dropDownContainer}
        data-aos={"fade-up"}
        data-aos-delay="200"
        className="mt-60 md:mt-35 container"
      >
        <div
          id="bookNow"
          className="searchForm -type-1 flex-column"
          style={{ height: "auto" }}
        >
          <div
            className="searchForm__form d-flex flex-column"
            style={{ gap: "20px" }}
          >
            <div className="d-flex" style={{ gap: "10px" }}>
              <div className="searchFormItem">
                <TextField
                  error={errors.fromLocation && Boolean(errors.fromLocation)}
                  label="From"
                  variant="standard"
                  fullWidth
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  color="primary"
                  helperText={errors.fromLocation && "From is Required"}
                  InputProps={{
                    style: { color: "white" },
                    classes: {
                      notchedOutline: "border-color",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#f6bc16" },
                  }}
                />
              </div>

              <div className="searchFormItem">
                <TextField
                  error={errors.toLocation && Boolean(errors.toLocation)}
                  label="To"
                  variant="standard"
                  fullWidth
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  color="primary"
                  helperText={errors.toLocation && "To is Required"}
                  InputProps={{
                    style: { color: "white" },
                    classes: {
                      notchedOutline: "border-color",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#f6bc16" },
                  }}
                />
              </div>

              <div className="searchFormItem">
                <TextField
                  label="Travelers"
                  value={`${adults} Adults, ${children} Children`}
                  onClick={handleTravelerClick}
                  fullWidth
                  variant="standard"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>

              <Popover
                open={Boolean(travelerAnchorEl)}
                anchorEl={travelerAnchorEl}
                onClose={handleTravelerClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div style={{ padding: "20px", width: "300px" }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="subtitle1">Adults</Typography>
                    <div className="d-flex align-items-center">
                      <IconButton
                        onClick={() => handleDecrease(setAdults, adults)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography variant="body1">{adults}</Typography>
                      <IconButton
                        onClick={() => handleIncrease(setAdults, adults)}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="subtitle1">Children</Typography>
                    <div className="d-flex align-items-center">
                      <IconButton
                        onClick={() => handleDecrease(setChildren, children)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography variant="body1">{children}</Typography>
                      <IconButton
                        onClick={() => handleIncrease(setChildren, children)}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  </Stack>

                  {errorTravelerMessage && (
                    <Typography variant="caption" align="center" width="100%">
                      {errorTravelerMessage}
                    </Typography>
                  )}
                </div>
              </Popover>

              <div className="searchFormItem">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    fullWidth
                    label="Select Date & Time"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    shouldDisableTime={(timeValue, clockType) => {
                      const disabledDateTimes = [
                        "2024-10-24T00:15:00.000Z", // Oct 24, 12:15 AM
                        "2024-10-31T10:40:00.000Z", // Oct 31, 10:40 AM
                        "2024-10-22T08:20:00.000Z", // Oct 22, 8:20 AM
                        "2024-10-22T18:05:00.000Z", // Oct 22, 6:05 PM
                      ];

                      const selectedDateString = selectedDate
                        ?.toISOString()
                        .split("T")[0];
                      const matchingDisabledTimes = disabledDateTimes.filter(
                        (disabledDateTime) =>
                          new Date(disabledDateTime)
                            .toISOString()
                            .split("T")[0] === selectedDateString
                      );

                      if (matchingDisabledTimes.length === 0) return false;

                      if (clockType === "hours") {
                        return matchingDisabledTimes.some(
                          (disabledDateTime) => {
                            const disabledHour = new Date(
                              disabledDateTime
                            ).getHours();
                            return timeValue === disabledHour;
                          }
                        );
                      }

                      if (clockType === "minutes") {
                        return matchingDisabledTimes.some(
                          (disabledDateTime) => {
                            const disabledTime = new Date(disabledDateTime);
                            const disabledHour = disabledTime.getHours();
                            const disabledMinute = disabledTime.getMinutes();
                            return (
                              disabledHour ===
                                new Date(selectedDate).getHours() &&
                              timeValue === disabledMinute
                            );
                          }
                        );
                      }

                      return false;
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "red",
                            },
                            "&:hover fieldset": {
                              borderColor: "green",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "purple",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className="searchForm__button">
            <Button
              onClick={requestHandler}
              variant="contained"
              fullWidth
              className=" bg-vivid-orange button -sm -outline-black "
            >
              Request
            </Button>
          </div>
        </div>
      </div> */}
      <FlightRequestMenu />
    </ThemeProvider>
  );
}
