import styles from "./Table.module.scss";
import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Checkbox } from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

// custom MUI theme for DataGrid
const theme = createTheme({
  palette: {
    primary: {
      main: "#FB2929",
    },
    secondary: {
      main: "#FFD0D0",
    },
    contrastThreshold: 3,
  },
});

function CustomCheckbox(props) {
  return (
    <Checkbox
      size="small"
      sx={{
        color: "#FF6060",
        "&.Mui-checked": { color: "#FF6060" },
      }}
      {...props}
    />
  );
}

const columns = [
  { field: "date", headerName: "Date", width: 100 },
  { field: "qid", headerName: "QueryID", width: 100 },
  {
    field: "type",
    headerName: "Type",
    width: 120,
  },
  {
    field: "subject",
    headerName: "Subject",
    width: 180,
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 120,
    sortable: false,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    sortable: false,
  },
  {
    field: "escalated",
    headerName: "Escalated to",
    width: 180,
    sortable: false,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    width: 180,
  },
  {
    field: "resolveBy",
    headerName: "Resolve By",
    width: 180,
  }
];

const rows = [
  {
    id: 1,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",
  },
  {
    id: 2,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 3,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 4,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 5,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 6,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 7,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 8,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 9,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 10,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 11,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 12,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
  {
    id: 13,
    date: "2021-10-01",
    qid: "123",
    type: "Change Order",
    subject: "Change in the syllabus",
    priority: "High",
    status: "Open",
    escalated: "Dean",
    lastUpdated: "2021-10-01 11:45 AM",
    resolveBy: "2021-10-01 11:45 AM",

  },
];

export default function Table({ setShowButton, setSelectedRows }) {
  
  // Get selected data from the table
  function handleSelection(ids) {
    const selectedIDs = new Set(ids);
    const selectedRows = rows.filter((row) => selectedIDs.has(row.id));
    selectedRows.length == 1 ? setShowButton(true) : setShowButton(false);
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  }
  return (
    <Box className={styles.box} sx={{ height: 500, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ columns: {
            // hide resolve by column
            columnVisibilityModel: {resolveBy: false}
          }}}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          experimentalFeatures={{ newEditingApi: true }}
          onSelectionModelChange={handleSelection}
          components={{
            BaseCheckbox: CustomCheckbox,
          }}
          sx={{
            ".MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "&.MuiDataGrid-root": {
              border: "none",
              fontSize: "12px",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: " #FFE5E5",
              fontSize: "15px",
            },
            "& .MuiDataGrid-virtualScrollerRenderZone": {
              "& .MuiDataGrid-row": {
                "&:hover": { backgroundColor: "#FFF4F4" }
              },
            },
          }}
        />
      </ThemeProvider>
    </Box>
  );
}
