import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState, useCallback, useMemo } from "react";
import ApiService from "@/api.service";
import { dateFormat } from "@/utilis/dateFormat";
import DatagridToolbar from "./my-booking/DatagridToolbar";
import {
  dateFilterOperators,
  stringFilterOperators,
  numericFilterOperators
} from "@/utilis/gridFilterFormat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAuth } from "@/contexts/auth.context";

export default function DashboardGrid({}) {
  const [data, setData] = useState([]);
  const {user} = useAuth()
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(async (id) => {
    setLoading(true);
    const res = await ApiService.get(
      `/me/hours-history`
    );
    setLoading(false);

    const resWithId = res.map((r) => ({
      ...r,
      id: r._id,
      added_by: r.added_by.username,
    }));

    // console.log("resssss",resWithId)
    setData(resWithId);
  }, []);
  useEffect(() => {
    if(user){
        fetchData(user._id);

    }
    
  }, [user?._id]);

  const columns = useMemo(
    () => [
      {
        field: "added_by",
        headerName: "Added By",
        filterOperators: stringFilterOperators,
        flex: 1,
        editable: false,
      },
      {
        field: "createdAt",
        headerName: "Added At",
        filterOperators: dateFilterOperators,
        type: "date",
        valueGetter: (value) => new Date(value),
        flex: 1,
        renderCell: (param) => {
          return dateFormat(param.row.createdAt);
        },
      },
      {
        field: "total_hours",
        headerName: "New Total Hours",
        type: "number",
        filterOperators: numericFilterOperators,
        flex: 1,
        editable: false,
      },
      {
        field: "old_total_hours",
        headerName: "Old Total Hours",
        type: "number",
        filterOperators: numericFilterOperators,
        flex: 1,
        editable: false,
        renderCell: (param) => {
          return param.row.old_total_hours ? param.row.old_total_hours : "N/A";
        },
      },

      {
        field: "used_hours",
        headerName: "New Used Hours",
        type: "number",
        filterOperators: numericFilterOperators,
        flex: 1,
        editable: false,
      },
      {
        field: "old_used_hours",
        headerName: "Old Used Hours",
        type: "number",
        filterOperators: numericFilterOperators,
        flex: 1,
        editable: false,
        renderCell: (param) => {
          return param.row.old_used_hours ? param.row.old_used_hours : "N/A";
        },
      },
    ],
    []
  );
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
          rows={data}
          disableMultipleSelection
          columns={columns}
          loading={loading}
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
