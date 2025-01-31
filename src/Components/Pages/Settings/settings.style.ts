import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme:Theme)=>({
    settingsCon: {
      padding: "4rem 2rem",
    },
    settingsText: {
      marginBottom: "2rem !important",
    },
    settingFormCon: {
      border: "1px solid lightgrey",
      borderRadius: "1rem",
      marginBottom: "2rem !important",
    },
    settingsHead: {
      padding: "1rem 2rem",
      borderBottom: "1px solid lightgrey",
    },
    settingsTextHead: {
      "&.MuiTypography-root": {
        fontSize: "1.4rem",
      },
    },
    settingsTextPara: {
      "&.MuiTypography-root": {
        color: "grey",
        fontWeight: "200",
      },
    },
    CheckboxCon: {
      display: "flex",
      gap: "20rem",
      padding: "2rem",
      borderBottom: "1px solid lightgrey",
  
      [theme.breakpoints.down('md')]:{
         gap:'10%'
      },
      [theme.breakpoints.down('sm')]:{
         flexDirection:"column",
         gap:"3rem"
     }
    },
    checkboxItem: {
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
    },
    checkbox: {
      "&.Mui-checked": {
        color: "#635bff !important",
      },
    },
    settingsPasswordcon: {
      border: "1px solid lightgrey",
      borderRadius: "1rem",
    },
    PasswordHead: {
      padding: "1rem 2rem",
      borderBottom: "1px solid lightgrey",
    },
    PasswordTextHead: {
      "&.MuiTypography-root": {
        fontSize: "1.4rem",
      },
    },
    PasswordTextPara: {
      "&.MuiTypography-root": {
        color: "grey",
        fontWeight: "200",
      },
    },
    Updatepassword: {
      borderBottom: "1px solid lightgrey",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    formFields: {
      width: "55%",
      "& .MuiInputLabel-root": {
        color: "lightblack",
        fontSize: "1.1rem",
        fontWeight: "200",
  
        "&.Mui-focused": {
          color: "gray",
        },
      },
  
      "& .MuiOutlinedInput-root": {
        borderRadius: ".5rem",
        "&:hover fieldset": {
          borderColor: "lightgrey",
        },
        "&.Mui-focused fieldset": {
          borderColor: "lightgrey",
          color: "grey",
        },
      },
  
  
      [theme.breakpoints.down('sm')]:{
        width:'100%',
    },
    },
  }));
  