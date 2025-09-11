import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./flightRequest.css";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Custom icon
import {
  TextField,
  Button,
  CircularProgress,
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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useSnackbar } from "notistack";
import ApiService from "@/api.service";
import { useAuth } from "@/contexts/auth.context";

const FlightRequestMenu = () => {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [intervalSet, setIntervalSet] = useState(new Set());
  const [startDateLoading, setStartDateLoading] = useState(false);
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [flyingPerson, setFlyingPerson] = useState("");
  const [requestReturn, setRequestReturn] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectTrip, setSelectTrip] = useState("one-way");
  const [startTimeError, setStartTimeError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const dateRef = useRef();
  const requestReturnCheckbox = useRef();

  const { user } = useAuth();
  const [errors, setErrors] = useState({
    fromLocation: "",
    toLocation: "",
  });

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

    if (!dateRef.current.value) {
      formErrors.startDate = "Start date is required";
    }

    if (!termsAccepted) {
      formErrors.term =
        "Please accept the Terms and Conditions to proceed with your booking.";
    }

    // Check if there are any errors
    if (Object.keys(formErrors).length > 0 || errors.startDate) {
      setErrors((err) => ({
        ...err,
        ...formErrors,
      }));
      return;
    }

    // Clear any previous errors
    setErrors({ fromLocation: "", toLocation: "", flyingPerson: "", term: "" });

    const parts = dateRef.current.value.match(
      /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}) (AM|PM)$/
    );

    const [, day, month, year, hoursRaw, minutes, meridian] = parts;

    // Convert 12-hour format to 24-hour format
    let hours = Number(hoursRaw);
    if (meridian === "PM" && hours !== 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;

    // Create JavaScript Date object (months in JS start from 0)
    const jsDate = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      hours,
      Number(minutes)
    );

    const dayjsDate = dayjs(jsDate); // Convert to Day.js

    const url = `/attendants?adults=${adults}&children=${children}&from=${fromLocation}&to=${toLocation}&start_time=${dayjsDate}&request_return=${
      selectTrip === "round-trip"
    }`;

    if (!user) {
      const navigateUrl = `/login?redirect=${encodeURIComponent(url)}`;
      navigate(navigateUrl);
      return;
    }

    try {
      navigate(url);
      setFromLocation("");
      setToLocation("");
      setSelectedDate(dayjs());
      setFlyingPerson("");
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

  function generateIntervals(startDate, endDate, min) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const intervals = [];
    if (!endDate) {
      return [start];
    }

    if (start >= end) {
      throw new Error("Start date must be earlier than end date");
    }

    while (start <= end) {
      intervals.push(new Date(start).toISOString());
      start.setMinutes(start.getMinutes() + min);
    }

    return intervals;
  }

  async function getDisableInterval(month, year) {
    setStartDateLoading(true);
    try {
      const { flights, unavailability } = await ApiService.get(
        `get-month-Unavailablities?month=${month}&year=${year}&isPending=true`
      );

      const newIntervalSet = new Set();
      unavailability.forEach((d) => {
        const intervals = generateIntervals(d.start_time, d.end_time, 5);
        intervals.forEach((i) => newIntervalSet.add(i));
      });

      flights.forEach((d) => {
        const intervals = generateIntervals(d.start_time, d.end_time, 5);
        intervals.forEach((i) => newIntervalSet.add(i));
      });

      setIntervalSet(newIntervalSet);
      setStartDateLoading(false);
    } catch (err) {
      console.error("err -> getDisableInterval", err);
    }
  }

  const dateChangeHandler = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    getDisableInterval(month, year);
  };

  const startDateChangeHandler = (date) => {
    const isoString = date.toISOString();

    const now = new Date();

    if (date < now) {
      setErrors((prevError) => ({
        ...prevError,
        startDate:
          "Past dates cannot be selected. Please choose a present or future date.",
      }));
      return;
    }

    const isDateDisabled = intervalSet.has(isoString);
    setErrors((prevError) => ({
      ...prevError,
      startDate: isDateDisabled
        ? "Selected date and time is not available"
        : "",
    }));
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
                    value={`${adults} ${
                      adults > 1 ? "Adults" : "Adult"
                    }, ${children} ${children > 1 ? "Children" : "Child"}`}
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
                  <div style={{ padding: "20px", width: "300px !important" }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="subtitle1">
                        {adults > 1 ? "Adults" : "Adult"}
                      </Typography>
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
                      inputRef={dateRef}
                      fullWidth
                      id="start_time"
                      name="start_time"
                      label="Flight Start Time"
                      format="DD/MM/YYYY HH:MM A"
                      onChange={startDateChangeHandler}
                      className="datePicker"
                      slotProps={{
                        field: {
                          readOnly: true,
                        },
                        textField: {
                          placeholder: "Flight Start Time",
                          InputLabelProps: {
                            shrink: true,
                          },
                          helperText: errors.startDate && errors.startDate,
                        },
                      }}
                      shouldDisableTime={(value, view) => {
                        const inIsoFormat = value.toISOString();
                        return intervalSet.has(inIsoFormat);
                      }}
                      disablePast
                      onMonthChange={(d) => dateChangeHandler(d.toDate())}
                      onYearChange={(d) => dateChangeHandler(d.toDate())}
                      onOpen={() => dateChangeHandler(new Date())}
                      loading={startDateLoading}
                      renderLoading={() => <CircularProgress />}
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

              <Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={1}
                >
                  <Checkbox
                    className="term-condition-checkbox"
                    sx={{ padding: 0 }}
                    id="term-condtion"
                    checked={termsAccepted}
                    onChange={(evt) => setTermsAccepted(evt.target.checked)}
                    helperText="sss"
                  />
                  <label htmlFor="term-condtion">
                    I have read and agree to the Terms and Conditions.
                  </label>
                </Stack>
                {errors.term && (
                  <Typography variant="caption" color="error">
                    {errors.term}
                  </Typography>
                )}
              </Stack>

              <Stack>
                <Button
                  onClick={requestHandler}
                  variant="contained"
                  fullWidth
                  className="button button-gradient text-white -md"
                  style={{ width: "max-content", color: "white" }}
                >
                  Request
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FlightRequestMenu;
