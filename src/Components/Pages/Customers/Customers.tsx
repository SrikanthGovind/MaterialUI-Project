import {
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
import { useState} from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import type { ColDef ,RowSelectionOptions} from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

// interface row {
// 	make: string;
// 	model: string;
// 	price: number;
//   }

// interface col{
// 	headerName:string,
// 	field:keyof row
// }  

const rowSelection: RowSelectionOptions = {
	mode: "multiRow",
	headerCheckbox: true,
  };

export default function Customers() {
		const [rowData] = useState([
		  {
			Name: "Mercedes",
			Email: "Maybach",
			Location: 175720,
			Phone: false,
			Signedup: "December",
		  },
		  {
			Name: "Vauxhall",
			Email: "Astra",
			Location: 25795,
			Phone: false,
			Signedup: "April",
		  },
		  {
			Name: "Fiat",
			Email: "Panda",
			Location: 13724,
			Phone: false,
			Signedup: "November",
		  },
		  {
			Name: "Jaguar",
			Email: "I-PACE",
			Location: 69425,
			Phone: true,
			Signedup: "May",
		  },
		  {
			Name: "Jaguar",
			Email: "I-PACE",
			Location: 69425,
			Phone: true,
			Signedup: "May",
		  }
		]);
	
	  const [columnDefs] = useState<ColDef[]>([
		{field: "Name"},
		{ field: "Email" },
		{ field: "Location" },
		{ field: "Phone"},
		{field: "Signedup",},
	  ]);

	  const defaultColDef = {
		flex: 1,
		minWidth: 100,
	  };  
	
  return (
    <Box>
      <Box>
        <Box>
          <Typography>Customers</Typography>
          <Box>
            <Box>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CgImport />
                    </ListItemIcon>
                    <ListItemText primary="Import" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
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
          <Button>
            <IconButton>
              <BiPlus />
            </IconButton>
            <Typography component={"span"}>Add</Typography>
          </Button>
        </Box>
      </Box>
      <Box>
        <TextField
          placeholder="Search integration"
          InputProps={{
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <CiSearch />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
	  <div style={{ height: '500px' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection={rowSelection}
		defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50]}
      />
    </div>
	  </Box>
    </Box>
  );
}



