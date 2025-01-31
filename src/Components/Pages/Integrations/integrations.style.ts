import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyels = makeStyles((theme:Theme)=>({
    IntegrationsCon: {
      padding: " 4rem 2rem",
    },
    IntegrationHead: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "1rem",
  
      [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        gap:"1rem"
     }
    },
    IntegrationText: {
      "&.MuiTypography-root": {
        fontSize: "2.5rem",
      },
    },
    IntegrationListCon: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "0",
    },
    IntegrationListItem: {
      "&.MuiListItem-root": {
        width: "fit-content",
      },
    },
    IntegrationListIcon: {
      "&.MuiListItemIcon-root": {
        minWidth: "30px",
        fontSize: "1.3rem",
      },
    },
    IntegrationSearch: {
      border: "1px solid lightgrey",
      borderRadius: "1rem",
      padding: "1rem",
      marginBottom: "2rem",
    },
    IntegrationTextFields: {
      width: "50%",
      "& .MuiOutlinedInput-root": {
        borderRadius: ".6rem",
      },
  
      [theme.breakpoints.down('md')]:{
         width:'100%'
      }
    },
    IntegrationCardsCon: {
      display: "flex",
    },
    IntegrationCard: {
      border: "1px solid lightgrey",
      width: "100%",
      height: "100%",
  
      "&.MuiPaper-root": {
        borderRadius: "25px",
      },
    },
    CardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      borderBottom: "1px solid lightgrey",
      gap: "1rem",
      padding: "1.5rem",
      height: "75%",
    },
    CardReviews: {
      height: "25%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&.MuiCardContent-root": {
        padding: ".7rem",
      },
  
      [theme.breakpoints.down('md')]:{
        flexDirection:'column',
     }
    },
    CardReviewItem: {
      display: "flex",
      alignItems: "center",
  
    },
    CardText: {
      "&.MuiTypography-root": {
        fontWeight: "100",
      },
      [theme.breakpoints.down('md')]:{
        fontSize:".9rem !important"
     }
    },
    CardIcon: {
      "&.MuiButtonBase-root": {
        fontSize: "1rem",
      },
    },
    [theme.breakpoints.down('md')]:{
      fontSize:".9rem !important"
   }
  }));