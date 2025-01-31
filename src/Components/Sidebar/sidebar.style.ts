import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    sidebar: {
      color: "white",
      height:'100vh',
    },
    logocon: {
      padding: "1.5rem",
      borderBottom:'1px solid #535a68',
    },
    logoimg: {
      display:'flex',
      justifyContent:'center',
      gap:'1rem',
      flexDirection:'column'
    },
    sidebarscroll:{
      width:'100%',
      padding:'.5rem 1rem',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      border:'1px solid #535a68',
      borderRadius:'1rem',
    },
    sidebartext:{
      color:' #535a68',
    },
    arrows:{
       display:'flex',
    },
    menulistcon:{
        paddingBottom:'7rem',
        borderBottom:'1px solid  #535a68 ',
    },
    menuItem:{
      '& .MuiListItemIcon-root': {
        color: ' #888d9a',
        fontSize:'1rem'  
      },
      '& .MuiListItemText-primary': {
          color: '#888d9a', 
          fontSize:'1rem'
        },
        '&.MuiButtonBase-root':{
            borderRadius:'.5rem',
            color:'white',
            padding:'.6rem 1rem .6rem 1.7rem',
            margin:'5% '
        },
        '&.Mui-selected': {
          backgroundColor: '#635bff  !important', 
          color: 'white !important',      
        },
        '&.Mui-selected  .MuiListItemText-primary': { 
          color: 'white !important',      
        },
        '&.Mui-selected .MuiListItemIcon-root':{
          color: 'white !important',    
        },
    },
    ads:{
      padding:'1rem',
      display:'flex',
      flexDirection:'column',
      gap:'1rem'
     }
  });
  