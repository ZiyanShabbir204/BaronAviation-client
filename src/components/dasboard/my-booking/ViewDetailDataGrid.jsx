import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState, useCallback, useMemo } from "react";
import ApiService from "@/api.service";
import { dateFormat } from "@/utilis/dateFormat";
import DatagridToolbar from "./DatagridToolbar";
import {
  dateFilterOperators,
  stringFilterOperators,
} from "@/utilis/gridFilterFormat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FlightDetailGridMenu from "./FlightDetailGridMenu";
import { useAuth } from "@/contexts/auth.context";

export default function Datagrid({ value }) {
  const [rows, setRows] = useState(null);
  const [rowsLoading, setRowsLoading] = useState(false);
  const { user } = useAuth();
  console.log("value", value);

  const fetchRows = useCallback(async () => {
    try {
      setRowsLoading(true);
      const data = await ApiService.get(`/me/attendant/${value}`);
      setRows(
        data.map((d) => ({
          ...d,
          id: d._id,
        }))
      );
    } catch (err) {
      console.log("err in useFetchRow -> fetchRows", err);
    } finally {
      setRowsLoading(false);
    }
  }, [value]);

  useEffect(() => {
    fetchRows();
    console.log("data", rows);
  }, [value]);

  const columns = useMemo(() => {
    const defaultColumns = [
      {
        field: "first_name",
        headerName: "First Name",
        filterOperators: stringFilterOperators,
        width: 220,
      },
      {
        field: "last_name",
        headerName: "Last Name",
        filterOperators: stringFilterOperators,
        width: 220,
      },
      {
        field: "identity_number",
        headerName: "Identity Number",
        filterOperators: stringFilterOperators,
        width: 220,
      },
      {
        field: "gender",
        headerName: "Gender",
        filterOperators: stringFilterOperators,
        width: 220,
      },
      {
        field: "type",
        headerName: "Type",
        filterOperators: stringFilterOperators,
        width: 220,
      },
    ];

    return defaultColumns;
  }, []);

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

  return (
    <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          disableMultipleSelection
          columns={columns}
          loading={rowsLoading}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          slots={{ toolbar: DatagridToolbar }}
          rowSelection={false}
        />
      </ThemeProvider>
    </div>
  );
}
