import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
export const useStyles = makeStyles((theme:Theme)=>({
    accountCon: {
      padding: "4rem 2rem",
    },
    accountText: {
      marginBottom: "2rem !important",
    },
    accountCards: {
      display: "flex",
      gap: "2rem",
  
      [theme.breakpoints.down('md')]:{
        flexDirection:"column",
      }
    },
    accountCard: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      "&.MuiPaper-root": {
        borderRadius: "1.5em",
        border: "1px solid lightgrey",
      },
    },
    accountProfile:{
      width: "35%" ,
      [theme.breakpoints.down('md')]:{
        width:'100%'
     }
    },
    accountForm: {
      width: "65%",
      borderRadius: "1.5em",
      border: "1px solid lightgrey",
      [theme.breakpoints.down('md')]:{
         width:'100%'
      }
    },
  
    accountCardContent: {
      width: "100%",
      "&.MuiCardContent-root": {
        padding: "2rem ",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        borderBottom: "1px solid lightgrey",
      },
    },
    accountContentImg: {
      "&.MuiAvatar-root": {
        width: "5rem",
        height: "5rem",
        margin: "auto",
      },
    },
    accountContentTexthead: {
      "&.MuiTypography-root": {
        fontSize: "1.7rem",
        textAlign: "center",
      },
    },
    accountContentTextpara: {
      "&.MuiTypography-root": {
        fontSize: "1rem",
        textAlign: "center",
        color: "grey",
        fontWeight: "100",
      },
    },
    accountContentTextTime: {
      "&.MuiTypography-root": {
        fontSize: "1rem",
        textAlign: "center",
        color: "grey",
        fontWeight: "100",
      },
    },
  
    formHead: {
      padding: "1.5rem 2rem",
      borderBottom: "1px solid lightgrey",
    },
    formHeadPara: {
      "&.MuiTypography-root": {
        fontSize: "1.1rem",
        color: "grey",
        fontWeight: "200",
      },
    },
  
    formFieldsCon: {
      padding: "2.5rem 2rem",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "1rem",
      borderBottom: "1px solid lightgrey",
    },
    formFields: {
      width: "48%",
      [theme.breakpoints.down('lg')]:{
        width:'100%',
      },
      "& .MuiInputLabel-root": {
        color: "lightblack",
        fontSize:'1.1rem',
        fontWeight:"200",
  
        '&.Mui-focused': {
          color: 'gray',
        },
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: ".5rem",
        "&:hover fieldset": {
          borderColor: "lightgrey",
        },
        "&.Mui-focused fieldset": {
          borderColor: "lightgrey",
          color:'grey'
        },
      },
    },
  }));