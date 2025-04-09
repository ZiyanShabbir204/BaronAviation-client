import ApiService from "@/api.service";
import {
  CircularProgress,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f6bc16",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f6bc16",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

export default function Invoice() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [tokenResponse, setTokenResponse] = useState();
  const formRef = useRef();

  const redirectToMerchant = useCallback(async (id) => {
    const res = await ApiService.get(`/invoice/${id}`);
    console.log("res", res);
    setTokenResponse(res);
  });
  useEffect(() => {
    redirectToMerchant(id);
  }, [id]);

  useEffect(() => {
    if (
      tokenResponse &&
      formRef.current &&
      tokenResponse.invoiceData.status !== "paid"
    ) {
      formRef.current.submit();
    }
  }, [tokenResponse, formRef]);
  return (
    <ThemeProvider theme={theme}>
      {tokenResponse?.invoiceData?.status !== "paid" && (
        <section
          className="layout-pt-lg layout-pb-lg"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <CircularProgress variant="indeterminate" />

          <form
            ref={formRef}
            action="https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction"
            method="POST"
            style={{ display: "none" }} // Hides the form
          >
            <input type="text" name="MERCHANT_ID" value="102" />
            <input type="text" name="MERCHANT_NAME" value="Baron Aviation" />
            <input type="text" name="TOKEN" value={tokenResponse?.token} />
            <input type="text" name="PROCCODE" value="00" />
            <input
              type="text"
              name="TXNAMT"
              value={tokenResponse?.invoiceData.bill}
            />
            <input
              type="text"
              name="CUSTOMER_MOBILE_NO"
              value={tokenResponse?.invoiceData.flight_id.user.phone}
            />
            <input
              type="text"
              name="CUSTOMER_EMAIL_ADDRESS"
              value={tokenResponse?.invoiceData.flight_id.user.email}
            />
            <input type="text" name="SIGNATURE" value="RANDOMSTRINGVALUE" />
            <input type="text" name="VERSION" value="MY_VER_1.0" />
            <input type="text" name="TXNDESC" value="HP Mouse X1" />
            <input
              type="text"
              name="SUCCESS_URL"
              value={window.location.origin}
            />
            <input
              type="text"
              name="FAILURE_URL"
              value={window.location.origin}
            />
            <input
              type="text"
              name="BASKET_ID"
              value={tokenResponse?.invoiceData.flight_id.booking_id}
            />
            <input
              type="text"
              name="ORDER_DATE"
              value={
                tokenResponse?.invoiceData.flight_id.createdAt.split("T")[0]
              }
            />
            <input
              type="text"
              name="CHECKOUT_URL"
              value={`https://6d3e-103-196-160-88.ngrok-free.app/invoice/${tokenResponse?.invoiceData._id}/success`}
            />
          </form>
          <p>Redirecting you to the merchent</p>
        </section>
      )}

      {tokenResponse?.invoiceData?.status === "paid" && (
        <section
          className="layout-pt-lg layout-pb-lg"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <p>
            It looks like this invoice has already been paid. No further action
            is needed.
          </p>
        </section>
      )}
    </ThemeProvider>
  );
}
