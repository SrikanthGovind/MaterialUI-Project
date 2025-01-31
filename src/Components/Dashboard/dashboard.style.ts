import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import { Theme,Box } from "@mui/material";

export const CustomDashboard = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    height: "100vh",
  });
  
  export const CustomAppBar = styled(AppBar)({
    position: "fixed",
    width:'inherit',
    top: 0,
    background: "white",
    boxShadow: "none",
    borderBlockEnd: "1.5px solid lightgrey",
  
  });
  
  export const useStyles=makeStyles((theme:Theme)=>({
         drawer:{
          "& .MuiPaper-root":{
             width:'300px',
            backgroundColor: "#121621"
          },
          [theme.breakpoints.up('md')]:{
          }
         }
  }))