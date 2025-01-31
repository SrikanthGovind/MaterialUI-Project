import { Box, Drawer, IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../Sidebar/Sidebar";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Account from "../Pages/Account/Account";
import { CiSearch } from "react-icons/ci";
import { Route, Routes } from "react-router-dom";
import Overview from "../Pages/Overview/Overview";
import Customers from "../Pages/Customers/Customers";
import Integrations from "../Pages/Integrations/Integrations";
import Settings from "../Pages/Settings/Settings";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { CustomDashboard, CustomAppBar, useStyles } from "./dashboard.style";

export default function Dashboard() {
  const [open, setopen] = useState(false);
  const style = useStyles();

  function handleopen() {
    setopen((prev) => !prev);
  }

  return (
    <CustomDashboard sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "20%",
          position: "fixed",
          overflow: "auto",
          left: "0",
          display: { sm: "none", xs: "none", md: "block" },
          bgcolor: "#121621",
        }}
      >
        <Drawer open={open} onClose={handleopen} className={style.drawer}>
          <Sidebar />
        </Drawer>
        <Sidebar />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "80%" },
          marginLeft: "auto",
        }}
      >
        <CustomAppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <IconButton
                sx={{ fontSize: "2rem", display: { sm: "block", md: "none" } }}
                onClick={handleopen}
              >
                <CiMenuBurger />
              </IconButton>
              <IconButton sx={{ fontSize: "2rem" }}>
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
              <Badge
                badgeContent={" "}
                variant="dot"
                sx={{
                  "& .MuiBadge-dot": {
                    backgroundColor: "#15b79f",
                  },
                }}
              >
                <IconButton>
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
              </Badge>
              <Avatar
                alt="profile"
                src="data:image/jpeg;base64,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"
              />
            </Box>
          </Toolbar>
        </CustomAppBar>
        <Box sx={{ marginTop: "4rem" }}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Box>
      </Box>
    </CustomDashboard>
  );
}
