import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./flightRequest.css";
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
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useSnackbar } from "notistack";
import ApiService from "@/api.service";
import { useAuth } from "@/contexts/auth.context";

const FlightRequestMenu = () => {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [flyingPerson, setFlyingPerson] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const { user } = useAuth();
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

    if (!user) {
      navigate("/login");
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
      const url = `adults=${adults}&children=${children}&from=${fromLocation}&to=${toLocation}&start_time=${selectedDate}`
      const encodedUrl = encodeURIComponent(url)
      navigate(`/attendants?${url}`)
      // console.log("res booking flyingPerson", flyingPerson);
      // console.log("res booking", res);
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
      <div className="requet-menu">
        <div className="request-menu-left"></div>

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
              <h1 className=" hero-heading">What's Your Destination?</h1>
              <div className="location-menu">
                
                <div className="searchFormItem">
                  <TextField
                    error={errors.fromLocation && Boolean(errors.fromLocation)}
                    label="From"
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
                    label="To"
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
                >
                  <div style={{ padding: "20px", width: "300px !important"  }}>
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
                      format="DD/MM/YYYY h:m A"
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
                    />
                  </LocalizationProvider>
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

export default FlightRequestMenu;
