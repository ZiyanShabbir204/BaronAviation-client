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

export default function Datagrid({ status }) {
  const [rows, setRows] = useState(null);
  const [rowsLoading, setRowsLoading] = useState(false);
  const { user } = useAuth();

  const fetchRows = useCallback(async () => {
    try {
      setRowsLoading(true);
      const data = await ApiService.get(
        `/flight-booking/my-flights?status=${
          status === "approved" ? "approve" : status
        }`
      );
      setRows(
        data.map((d) => ({
          ...d,
          id: d._id,
          adult: d.attendants.filter((a) => a.type === "Adult").length,
          children: d.attendants.filter((a) => a.type === "children").length,
        }))
      );
    } catch (err) {
      console.log("err in useFetchRow -> fetchRows", err);
    } finally {
      setRowsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    fetchRows();
    console.log("data", rows);
  }, [status]);

  const columns = useMemo(() => {
    const defaultColumns = [
      {
        field: "booking_id",
        filterOperators: stringFilterOperators,
        headerName: "Flight ID",
        editable: false,
        width: 160,
        renderCell: (param) => {
          return param.row.booking_id ? param.row.booking_id : "N/A";
        },
      },

      {
        field: "from",
        filterOperators: stringFilterOperators,
        headerName: "From",
        editable: false,
        width: 160,
      },
      {
        field: "to",
        filterOperators: stringFilterOperators,
        headerName: "To",
        editable: false,
        width: 160,
      },

      {
        field: "start_time",
        headerName: "Flight Start Time",
        type: "date",
        filterOperators: dateFilterOperators,
        valueGetter: (value) => new Date(value),
        width: 200,
        editable: false,
        renderCell: (param) => {
          return dateFormat(param.row.start_time);
        },
      },
      {
        field: "end_time",
        headerName: "Flight End Time",
        type: "date",
        filterOperators: dateFilterOperators,
        valueGetter: (value) => new Date(value),
        width: 200,
        editable: false,
        renderCell: (param) => {
          return param.row.end_time ? dateFormat(param.row.end_time) : "N/A";
        },
      },
      {
        field: "createdAt",
        headerName: "Flight Booked At",
        type: "date",
        filterOperators: dateFilterOperators,
        valueGetter: (value) => new Date(value),
        width: 200,
        editable: false,
        renderCell: (param) => {
          return dateFormat(param.row.createdAt);
        },
      },
      {
        field: "adult",
        filterOperators: stringFilterOperators,
        headerName: "Adult",
        editable: false,
        width: 160,
      },
      {
        field: "children",
        filterOperators: stringFilterOperators,
        headerName: "Children",
        editable: false,
        width: 160,
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        renderCell: (param) => {
          return <FlightDetailGridMenu data={param.row} />;
        },
      },
    ];

    return defaultColumns;
  }, [user?.role]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f6bc16", // Set the main color to #eb662b
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
