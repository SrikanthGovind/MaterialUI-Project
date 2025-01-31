import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme:Theme)=>({
    CustomerCon: {
      padding: " 4rem 2rem",
    },
    CustomerHead: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "1rem",
  
      [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        gap:"1rem"
     }
    },
    CustomerText: {
      "&.MuiTypography-root": {
        fontSize: "2.5rem",
      },
    },
    CustomerListCon: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "0",
    },
    CustomerListItem: {
      "&.MuiListItem-root": {
        width: "fit-content",
      },
    },
    CustomerListIcon: {
      "&.MuiListItemIcon-root": {
        minWidth: "30px",
        fontSize: "1.3rem",
      },
    },
    CustomerSearch: {
      border: "1px solid lightgrey",
      borderRadius: "1rem",
      padding: "1rem",
      marginBottom: "2rem",
    },
    CustomerTextFields: {
      width: "50%",
      "& .MuiOutlinedInput-root": {
        borderRadius: ".6rem",
      },
  
      [theme.breakpoints.down('md')]:{
        width:'100% !important'
     }
    },
    customeraggrid:{
      "& .ag-root-wrapper": {
        borderRadius:'1rem',
      },
      "& .ag-row": {
        fontSize: ".9rem",
        color: "#6c707b",
      },
      "& .ag-header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      },
      "& .ag-paging-panel":{
        height:'50px',
        
        [theme.breakpoints.down('sm')]:{
        display:'none'
        }
  
      },
      "& .ag-cell ":{
         display:'flex',
      },
      "& .ag-checkbox-input-wrapper":{
          width:'20px',
          height:'20px',
          border:'0',
           
          "&::before":{
            content:'none'
          },
          "&::after":{
            content:'none'
          },
          "& input":{
            opacity:"1 !important",
            appearance:'auto !important',
          },
      },
      "& .ag-cell-focus:not(.ag-cell-range-selected):focus-within,":{
         border:'0'
      }
    }
  }));