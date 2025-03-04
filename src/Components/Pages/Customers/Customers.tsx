import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { BiExport, BiPlus } from "react-icons/bi";
import { CgImport } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import type { ColDef, RowSelectionOptions } from "ag-grid-community";
import { customerRowdata } from "../../Utility/data";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "../../../App.css";
import { useStyles } from "./Customer.style";
ModuleRegistry.registerModules([AllCommunityModule]);

export default function Customers() {
  const style = useStyles();

  const rowSelection: RowSelectionOptions = {
    mode: "multiRow",
    headerCheckbox: true,
  };

  const [columnDefs] = useState<ColDef[]>([
    {
      field: "Name",
      headerClass: "customheader",
      cellClass: "customcell",
      cellRenderer: (params: CustomCellRendererProps) => {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Avatar src={params.data.img} />
            <span>{params.value}</span>
          </div>
        );
      },
    },
    { field: "Location", headerClass: "customheader", cellClass: "customcell" },
    { field: "Email", headerClass: "customheader", cellClass: "customcell" },
    { field: "Phone", headerClass: "customheader", cellClass: "customcell" },
    { field: "Signedup", headerClass: "customheader", cellClass: "customcell" },
  ]);

  const defaultColDef = {
    flex: 1,
    minWidth: 260,
  };

  return (
    <Box className={style.CustomerCon}>
      <Box className={style.CustomerHead}>
        <Box>
          <Typography className={style.CustomerText}>Customers</Typography>
          <Box>
            <Box>
              <List className={style.CustomerListCon}>
                <ListItem disablePadding className={style.CustomerListItem}>
                  <ListItemButton>
                    <ListItemIcon className={style.CustomerListIcon}>
                      <CgImport />
                    </ListItemIcon>
                    <ListItemText primary="Import" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={style.CustomerListItem}>
                  <ListItemButton>
                    <ListItemIcon className={style.CustomerListIcon}>
                      <BiExport />
                    </ListItemIcon>
                    <ListItemText primary="Export" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box></Box>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              bgcolor: "#635bff",
              color: "white",
              textTransform: "none",
              borderRadius: ".8rem",
              padding: ".1rem .9rem .1rem .5rem",
              display: "flex",
              gap: ".3rem",
            }}
          >
            <IconButton sx={{ color: "white" }}>
              <BiPlus />
            </IconButton>
            <Typography component={"span"}>Add</Typography>
          </Button>
        </Box>
      </Box>
      <Box className={style.CustomerSearch}>
        <TextField
          placeholder="Search integration"
          className={style.CustomerTextFields}
          InputProps={{
            type: "search",
            startAdornment: (
              <InputAdornment position="start" sx={{ fontSize: "1.6rem" }}>
                <CiSearch />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <Box
          className={style.customeraggrid}
          style={{ height: "600px", overflow: "scroll" }}
        >
          <AgGridReact
            rowData={customerRowdata}
            columnDefs={columnDefs}
            rowSelection={rowSelection}
            defaultColDef={defaultColDef}
            rowHeight={70}
            headerHeight={60}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 25, 50]}
            className="ag-theme-material"
          />
        </Box>
      </Box>
    </Box>
  );
}
