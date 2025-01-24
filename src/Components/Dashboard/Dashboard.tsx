import { Box, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../Sidebar/Sidebar";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Account from "../Pages/Account/Account";
import { CiSearch } from "react-icons/ci";
import { Route,Routes } from "react-router-dom";
import Overview from "../Pages/Overview/Overview";
import Customers from '../Pages/Customers/Customers'
import Integrations from "../Pages/Integrations/integrations";
import Settings from "../Pages/Settings/Settings";

const CustomDashboard = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  height: "100vh",
});

const CustomAppBar = styled(AppBar)({
  width: "100%",
  position: "sticky",
  top: 0,
  background: "white",
  boxShadow: "none",
  borderBlockEnd: "1.5px solid lightgrey",
});

export default function Dashboard() {
  return (
    <CustomDashboard>
      <Box sx={{ width: "20%" }}>
        <Sidebar />
      </Box>
      <Box sx={{ width: "80%" }}>
        <CustomAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <IconButton>
                <CiSearch />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <IconButton>
                <PeopleAltOutlinedIcon />
              </IconButton>
              <Badge badgeContent={" "} variant="dot" color="success">
                <IconButton>
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
              </Badge>
              <Avatar alt="profile" src="" />
            </Box>
          </Toolbar>
        </CustomAppBar>
        <Box>
            <Routes>
              <Route path="/" element={<Overview/>} />
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/integrations" element={<Integrations/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/account" element={<Account/>}/>
            </Routes>
        </Box>
      </Box>
    </CustomDashboard>
  );
}
