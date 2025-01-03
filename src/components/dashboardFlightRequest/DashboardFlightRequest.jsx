import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./dashboardFlightRequest.css";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Custom icon
import {
  TextField,
  Button,
  Popover,
  IconButton,
  Typography,
  Stack,
  InputAdornment,
  Checkbox,
  Radio,
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
import { useAuth } from "@/contexts/auth.context";
import ApiService from "@/api.service";

const DashboardFlightRequest = () => {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [flyingPerson, setFlyingPerson] = useState("");
  const requestReturnCheckbox = useRef();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { user } = useAuth();
  const [errors, setErrors] = useState({
    fromLocation: "",
    toLocation: "",
  });
  const [selectTrip, setSelectTrip] = useState("one-way");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelerAnchorEl, setTravelerAnchorEl] = useState(null);
  const [errorTravelerMessage, setTravelerMessage] = useState("");

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
      username: user.username,
      flying_person: flyingPerson,
    };

    try {
      // const res =  await axios.post("http://localhost:5000/flight-booking",bookingData)
      // const res = await ApiService.post("/flight-booking", bookingData);
      // console.log("res booking", res);
      const url = `adults=${adults}&children=${children}&from=${fromLocation}&to=${toLocation}&start_time=${selectedDate}&request_return=${
        selectTrip === "round-trip"
      }`;
      const encodedUrl = encodeURIComponent(url);
      navigate(`/attendants?${url}`);
      setFromLocation("");
      setToLocation("");
      setSelectedDate(dayjs());
      setFlyingPerson("");
      // enqueueSnackbar("Flight has been created", {
      //   variant: "success",
      // });
    } catch (err) {
      console.log("Error in FlightRequest -> submitHandler", err);
    }
  };
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
      <div className="dashboard-flight-request bg-dark-grey rounded-12 shadow-2">
        <div
          id="bookNow"
          className="searchForm -type-1 flex-column"
          style={{ height: "auto" }}
          ref={dropDownContainer}
        >
          <div
            className="searchForm__form d-flex flex-column"
            style={{ gap: "20px" }}
          >
            <div className="request-menu-right" style={{ gap: "10px" }}>
              <h2 className=" hero-heading">Book your next flight</h2>
              <div className="location-menu">
                <div className="searchFormItem">
                  <TextField
                    error={errors.fromLocation && Boolean(errors.fromLocation)}
                    label="Flying From"
                    variant="outlined"
                    fullWidth
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    color="primary"
                    helperText={errors.fromLocation && "From is Required"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon style={{ color: "#f6bc16" }} />
                        </InputAdornment>
                      ),
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
                    label="Flying To"
                    variant="outlined"
                    fullWidth
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    color="primary"
                    helperText={errors.toLocation && "To is Required"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon
                            style={{ color: "#f6bc16", marginBottom: "5px" }}
                          />
                        </InputAdornment>
                      ),
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
              </div>
              <div className="info-menu">
                <div className="searchFormItem">
                  <TextField
                    label="Travelers"
                    value={`${adults} Adults, ${children} Children`}
                    onClick={handleTravelerClick}
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GroupsIcon style={{ color: "#f6bc16" }} />
                        </InputAdornment>
                      ),
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

                <Popover
                  open={Boolean(travelerAnchorEl)}
                  anchorEl={travelerAnchorEl}
                  onClose={handleTravelerClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  className="flight-popper"
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
                      <Typography variant="subtitle1">
                        Kid (1–10 years)
                      </Typography>
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
                      label="Flight Start Time"
                      format="DD/MM/YYYY h:m A"
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
                          variant="outlined"
                          sx={{
                            flexDirection: "row-reverse",
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
                      className="datePicker"
                      slotProps={{
                        textField: {
                          placeholder: "Flight Start Time",
                        },
                        field: {
                          readOnly: true,
                        },
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flight-type-option">
                <div>
                  <Radio
                    checked={selectTrip === "one-way"}
                    onChange={(evt) => {
                      setSelectTrip(evt.target.value);
                    }}
                    value="one-way"
                    id="one-way"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <label htmlFor="one-way">One Way</label>
                </div>
                <div>
                  <Radio
                    checked={selectTrip === "round-trip"}
                    onChange={(evt) => setSelectTrip(evt.target.value)}
                    value="round-trip"
                    id="round-trip"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <label htmlFor="round-trip">Round Trip </label>
                </div>
              </div>

              <Button
                onClick={requestHandler}
                variant="contained"
                fullWidth
                className=" button button-gradient text-white -md"
                style={{ width: "max-content", color: "white" }}
              >
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardFlightRequest;
