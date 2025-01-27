import {
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import PersonIcon from "@mui/icons-material/Person";
import { AiFillCloseSquare } from "react-icons/ai";
import { TbSwitch3 } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiFillSlackCircle } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  sidebar: {
    backgroundColor: "#121621",
    color: "white",
    height:'100vh',
  },
  logocon: {
    padding: "1.5rem",
    borderBottom:'1px solid #535a68'
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
      borderBottom:'1px solid  #535a68 '
  },
  menulist:{

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
          margin:'1rem'
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
      }
  },
  ads:{
    padding:'1rem',
    display:'flex',
    flexDirection:'column',
    gap:'1rem'
   }
});

export default function Sidebar() {

  const [isselected,setselected]=useState<number>(0);
  const classes = useStyles();

  function handleselect(index:number){
      setselected(index)
  }

  return (
    <div className={classes.sidebar}>
      <Box className={classes.logocon}>
        <Box className={classes.logoimg}>
          <img
            src="https://material-kit-react.devias.io/assets/logo.svg"
            width={"50%"}
            height={"100%"}
          />
          <Box className={classes.sidebarscroll}>
            <Box>
              <Typography sx={{fontSize:'1.2rem'}} className={classes.sidebartext}>Workspace</Typography>
              <Typography sx={{fontSize:'1.3rem'}} >Devias</Typography>
            </Box>
            <Box className={classes.arrows} sx={{flexDirection:'column'}}>
              <IconButton sx={{padding:'0'}}>
                <IoIosArrowUp  fill="white" fontSize={'.9rem'} />
              </IconButton>
              <IconButton sx={{padding:'0'}} >
                <IoIosArrowDown fill="white" fontSize={'.9rem'}/>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.menulistcon}>
          <MenuList className={classes.menulist}>
            <MenuItem component={Link} to="/" className={classes.menuItem} selected={isselected===0} onClick={()=>handleselect(0)}>
              <ListItemIcon >
                <AiFillSlackCircle />
              </ListItemIcon>
              <ListItemText>Overview</ListItemText>
            </MenuItem>
            <MenuItem component={Link} to="/customers"  className={classes.menuItem}  selected={isselected===1} onClick={()=>handleselect(1)}>
              <ListItemIcon>
                <MdOutlinePeopleAlt />
              </ListItemIcon>
              <ListItemText>Customers</ListItemText>
            </MenuItem>
            <MenuItem component={Link} to="/integrations"  className={classes.menuItem}  selected={isselected===2} onClick={()=>handleselect(2)}>
              <ListItemIcon>
                <TbSwitch3 />
              </ListItemIcon>
              <ListItemText>Integrations</ListItemText>
            </MenuItem>
            <MenuItem component={Link} to="/settings"  className={classes.menuItem} selected={isselected===3} onClick={()=>handleselect(3)}>
              <ListItemIcon>
                <IoSettingsOutline />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <MenuItem component={Link} to="/account"  className={classes.menuItem} selected={isselected===4} onClick={()=>handleselect(4)}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </MenuItem>
            <MenuItem  className={classes.menuItem} selected={isselected===5} onClick={()=>handleselect(5)}>
              <ListItemIcon>
                <AiFillCloseSquare />
              </ListItemIcon>
              <ListItemText>Error</ListItemText>
            </MenuItem>
          </MenuList>
      </Box>
      <Box className={classes.ads}>
        <Box>
          <Typography>Need more features?</Typography>
          <Typography sx={{color:'#535a68'}}>Check out our Pro solution template</Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src="https://material-kit-react.devias.io/assets/devias-kit-pro.png" width={'60%'} />
        </Box>
        <Box sx={{margin:'auto'}}>
          <Button sx={{bgcolor:'#635bff', padding:'.5rem 5rem', borderRadius:'1rem'}}>
            <Typography  sx={{color:'white',textTransform:'none'}}>Pro version</Typography>
            <IconButton sx={{color:'white', fontSize:'1.2rem'}}>
              <BsArrowUpRightSquare />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
