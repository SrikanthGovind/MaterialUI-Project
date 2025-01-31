import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme:Theme)=>({
  OverviewCon: {
    padding: " 4rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",

    [theme.breakpoints.down('sm')]:{
      padding:"2rem",
   }
  },
  OverviewCardsCon: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  },
  OverviewCard: {
    border: "1px solid lightgrey",
    borderRadius: "1rem",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    flex: "1",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  CardContentHead: {
    "&.MuiTypography-root": {
      textTransform: "uppercase",
      fontSize: ".8rem",
      color: "#6B728E",
    },
  },
  CardContentPara: {
    "&.MuiTypography-root": {
      fontSize: "2.5rem",
    },
  },
  CardImg1: {
    "&&": {
      color: "white",
      background: "#635bff",
      width: "4rem",
      height: "4rem",
      fontSize: "1.7rem",
    },
  },
  CardImg2: {
    "&.MuiAvatar-root": {
      color: "white",
      background: "#15b79f",
      width: "4rem",
      height: "4rem",
      fontSize: "1.7rem",
    },
  },
  CardImg3: {
    "&.MuiAvatar-root": {
      color: "white",
      background: "#fb9a0b",
      width: "4rem",
      height: "4rem",
      fontSize: "1.7rem",
    },
  },
  CardImg4: {
    "&.MuiAvatar-root": {
      color: "white",
      background: "#635bff",
      fontSize: "2rem",
      width: "4rem",
      height: "4rem",
    },
  },
  CardBottomCon: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  CardStack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "#15b79f",
  },
  OverviewChartsCon: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down('lg')]:{
       flexDirection:'column',
       gap:'2rem'
   }
  },
  OverviewChart: {
    border: "1px solid lightgrey",
    borderRadius: "1rem",
    width: "68%",
    [theme.breakpoints.down('lg')]:{
      width:'100%',
      height:"600px"
  }
  },
  OverviewChartHead: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  OverviewChartButton: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    borderTop: "1px solid lightgrey",
  },
  OverviewPiechart: {
    border: "1px solid lightgrey",
    borderRadius: "1rem",
    padding: "1rem 1rem 4rem 1rem",
    width: "30%",
    display:'flex',
    alignItems:'center',
    flexDirection:'column',

    [theme.breakpoints.down('lg')]:{
      width:'100%'
  },
  },
  PieChart:{
      width:'100%',
      marginLeft:'5rem',
      

     '& .css-172kpif-MuiResponsiveChart-container':{
      [theme.breakpoints.down('xl')]:{
        width:'auto',
        height:'200px'
       },
         [theme.breakpoints.down('md')]:{
          width:'auto',
          marginLeft:'auto',
         },
         [theme.breakpoints.down('sm')]:{
         height:'180px',
         width:'auto'
         }
     }
  },
  OverviewPieLabels: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },

  OverviewTableCon: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down('lg')]:{
       flexDirection:'column',
       gap:'2rem'
    }
  },
  OverviewListCon: {
    width: "30%",
    border: "1px solid lightgrey",
    borderRadius: "1rem",

    [theme.breakpoints.down('lg')]:{
      width:'100%',
   }
  },
  OverviewListHead: {
    padding: "1.5rem",
    borderBottom: "1px solid lightgrey",
  },
  OverviewListButton: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  OverviewTableButton: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    borderTop: "1px solid lightgrey",
  },
  OverviewTable: {
    width: "68%",
    border: "1px solid lightgrey",
    borderRadius: "1rem",

    [theme.breakpoints.down('lg')]:{
      width:'100%',
      height:"550px"
   }
  },
  aggridwrapper: {
    "& .ag-root-wrapper": {
      border: "none",
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
  },
}));