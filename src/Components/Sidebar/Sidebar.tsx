import {
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
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

export default function Sidebar() {
  return (
    <div>
      <Box>
        <Box>
          <img src="https://material-kit-react.devias.io/assets/logo.svg" />
          <Box>
            <Box>
              <Typography variant="h6">Workspace</Typography>
              <Typography variant="body2">Devias</Typography>
            </Box>
			<Box>
				<IconButton>
					<IoIosArrowUp />
				</IconButton>
				<IconButton>
					<IoIosArrowDown />
				</IconButton>
			</Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
      <Box>
        <Paper>
          <MenuList>
            <MenuItem component={Link}  to="/">
              <ListItemIcon>
                <AiFillSlackCircle />
              </ListItemIcon>
              <ListItemText>Overview</ListItemText>
            </MenuItem>
            <MenuItem component={Link}  to="/customers">
              <ListItemIcon>
                <MdOutlinePeopleAlt />
              </ListItemIcon>
              <ListItemText>Customers</ListItemText>
            </MenuItem>
            <MenuItem  component={Link}  to="/integrations">
              <ListItemIcon>
                <TbSwitch3 />
              </ListItemIcon>
              <ListItemText>Integrations</ListItemText>
            </MenuItem>
            <MenuItem component={Link}  to="/settings">
              <ListItemIcon>
                <IoSettingsOutline />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <MenuItem  component={Link}  to="/account">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AiFillCloseSquare />
              </ListItemIcon>
              <ListItemText>Error</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Box>
      <Box>
		<Box>
			<Typography>Need more features?</Typography>
			<Typography>Check out our Pro solution template</Typography>
		</Box>	
		<Box>
			<img src=""/>
		</Box>	
		<Box>
			<Button>
				<Typography component={'span'}>Pro version</Typography>
				<IconButton>
					<BsArrowUpRightSquare/>
				</IconButton>
			</Button>
		</Box>	
	  </Box>
    </div>
  );
}
