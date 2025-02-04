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
import { Link} from "react-router-dom";
import { useState } from "react";
import { useStyles } from "./Sidebar.style";

export default function Sidebar() {
  const [isSelected, setSelected] = useState<number>(0);

  const classes = useStyles();

  function handleSelect(index: number) {
    setSelected(index);
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
              <Typography
                sx={{ fontSize: { md: "1rem", lg: "1.2rem" } }}
                className={classes.sidebartext}
              >
                Workspace
              </Typography>
              <Typography sx={{ fontSize: { md: "1.1rem", lg: "1.3rem" } }}>
                Devias
              </Typography>
            </Box>
            <Box className={classes.arrows} sx={{ flexDirection: "column" }}>
              <IconButton sx={{ padding: "0" }}>
                <IoIosArrowUp fill="white" fontSize={".9rem"} />
              </IconButton>
              <IconButton sx={{ padding: "0" }}>
                <IoIosArrowDown fill="white" fontSize={".9rem"} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.menulistcon}>
        <MenuList>
          <MenuItem
            component={Link}
            to="/"
            className={classes.menuItem}
            selected={isSelected === 0}
            onClick={() => handleSelect(0)}
          >
            <ListItemIcon>
              <AiFillSlackCircle />
            </ListItemIcon>
            <ListItemText>Overview</ListItemText>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/customers"
            className={classes.menuItem}
            selected={isSelected === 1}
            onClick={() => handleSelect(1)}
          >
            <ListItemIcon>
              <MdOutlinePeopleAlt />
            </ListItemIcon>
            <ListItemText>Customers</ListItemText>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/integrations"
            className={classes.menuItem}
            selected={isSelected === 2}
            onClick={() => handleSelect(2)}
          >
            <ListItemIcon>
              <TbSwitch3 />
            </ListItemIcon>
            <ListItemText>Integrations</ListItemText>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/settings"
            className={classes.menuItem}
            selected={isSelected === 3}
            onClick={() => handleSelect(3)}
          >
            <ListItemIcon>
              <IoSettingsOutline />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/account"
            className={classes.menuItem}
            selected={isSelected === 4}
            onClick={() => handleSelect(4)}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            selected={isSelected === 5}
            onClick={() => handleSelect(5)}
          >
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
          <Typography sx={{ color: "#535a68" }}>
            Check out our Pro solution template
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://material-kit-react.devias.io/assets/devias-kit-pro.png"
            width={"60%"}
          />
        </Box>
        <Box>
          <Button
            sx={{
              bgcolor: "#635bff",
              width: "90%",
              padding: { md: "0.5rem", sm: ".5rem 3rem", xs: ".5rem 1.5rem" },
              borderRadius: "1rem",
            }}
          >
            <Typography
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: { md: "1rem" },
              }}
            >
              Pro version
            </Typography>
            <IconButton sx={{ color: "white", fontSize: "1.2rem" }}>
              <BsArrowUpRightSquare />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </div>
  );
}
