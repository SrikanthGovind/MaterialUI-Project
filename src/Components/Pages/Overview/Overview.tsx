import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { GoArrowUp } from "react-icons/go";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoArrowDown } from "react-icons/go";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { rowData, ListArray } from "../../Utility/data";
import { ColDef } from "ag-grid-community";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import LinearProgress from "@mui/material/LinearProgress";
import { useMemo } from "react";
import { PiDesktopLight } from "react-icons/pi";
import { IoMdTabletPortrait } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { Piedata, Barchartdata } from "../../Utility/data";
import { BarChart, PieChart } from "@mui/x-charts";
import "../../../App.css";
import { useStyles } from "./Overview.style";

export default function Overview() {
  const style = useStyles();

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth:200
    };
  }, []);

  const colData: ColDef[] = [
    {
      field: "order",
      headerName: "Orders",
      headerClass: "customheader",
      cellClass: "customcell",
    },
    {
      field: "customer",
      headerName: "Customer",
      headerClass: "customheader",
      cellClass: "customcell",
    },
    {
      field: "date",
      headerName: "Date",
      headerClass: "customheader",
      cellClass: "customcell",
    },
    {
      field: "status",
      headerName: "Status",
      headerClass: "customheader",
      cellClass: "customcell",
      cellRenderer: (params: CustomCellRendererProps) => {
        let backgroundColor = "";
        if (params.value === "Pending") {
          backgroundColor = "#fb9a0b";
        }
        if (params.value === "Delivered") {
          backgroundColor = "#15b79f";
        }
        if (params.value === "Refunded") {
          backgroundColor = "#ef4337";
        }

        return (
          <span
            style={{
              backgroundColor,
              color: "white",
              textAlign: "center",
              borderRadius: "1rem",
              width: "50%",
            }}
          >
            {params.value}
          </span>
        );
      },
    },
  ];

  return (
    <Box className={style.OverviewCon}>
      <Box className={style.OverviewCardsCon}>
        <Box className={style.OverviewCard}>
          <Box className={style.CardContent}>
            <Box >
              <Typography className={style.CardContentHead}>Budget</Typography>
              <Typography className={style.CardContentPara}>$24k</Typography>
            </Box>
            <Box>
              <Avatar className={style.CardImg1}>$</Avatar>
            </Box>
          </Box>
          <Box className={style.CardBottomCon}>
            <Box className={style.CardStack}>
              <GoArrowUp />
              <Typography component={"span"}>12%</Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "100", fontSize: ".9rem", color: "#6B728E" }}
            >
              Since last month
            </Typography>
          </Box>
        </Box>
        <Box className={style.OverviewCard}>
          <Box className={style.CardContent}>
            <Box>
              <Typography className={style.CardContentHead}>
                Total customers
              </Typography>
              <Typography className={style.CardContentPara}>1.6k</Typography>
            </Box>
            <Box>
              <Avatar className={style.CardImg2}>
                <MdOutlinePeopleAlt />
              </Avatar>
            </Box>
          </Box>
          <Box className={style.CardBottomCon}>
            <Box className={style.CardStack} sx={{ color: "red" }}>
              <GoArrowDown />
              <Typography component={"span"} sx={{ color: "red" }}>
                16%
              </Typography>
            </Box>
            <Typography
              sx={{ fontWeight: "100", fontSize: ".9rem", color: "#6B728E" }}
            >
              Since last month
            </Typography>
          </Box>
        </Box>
        <Box className={style.OverviewCard}>
          <Box className={style.CardContent}>
            <Box>
              <Typography className={style.CardContentHead}>
                Task progress
              </Typography>
              <Typography className={style.CardContentPara}>75.5%</Typography>
            </Box>
            <Box>
              <Avatar className={style.CardImg3}>
                <TfiMenuAlt />
              </Avatar>
            </Box>
          </Box>
          <Box>
            <LinearProgress variant="determinate" value={70} />
          </Box>
        </Box>
        <Box className={style.OverviewCard}>
          <Box className={style.CardContent}>
            <Box>
              <Typography className={style.CardContentHead}>
                Total profit
              </Typography>
              <Typography className={style.CardContentPara}>$15k</Typography>
            </Box>
            <Box>
              <Avatar className={style.CardImg4}>
                <FaIndianRupeeSign />
              </Avatar>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={style.OverviewChartsCon}>
        <Box className={style.OverviewChart}>
          <Box className={style.OverviewChartHead}>
            <Typography sx={{ fontSize: "1.1rem" }}>Sales</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                color: "#6B728E",
                fontSize: ".9rem",
              }}
            >
              <GrPowerReset />
              <Typography sx={{ fontSize: ".9rem" }}>Sync</Typography>
            </Box>
          </Box>
          <Box >
            <BarChart
              dataset={Barchartdata}
              xAxis={[
                {
                  scaleType: "band",
                  dataKey: "month",
                  disableLine: true,
                  disableTicks: true,
                },
              ]}
              yAxis={[
                {
                  scaleType: "linear",
                  disableLine: true,
                  disableTicks: true,
                },
              ]}
              series={[
                { dataKey: "london", label: "London", color: "#635bff" },
                { dataKey: "paris", label: "Paris", color: "#d8d6fe" },
              ]}
              slotProps={{ legend: { hidden: true } }}
              height={400}
              grid={{
                horizontal: true,
              }}
              sx={{width:'100%'}}
            />
          </Box>
          <Box className={style.OverviewChartButton}>
            <Typography>Overview </Typography>
            <GoArrowRight style={{ fontSize: "1.3rem" }} />
          </Box>
        </Box>
        <Box className={style.OverviewPiechart}>
          <Box sx={{ marginBottom: ".5rem",width:"100%" }}>
            <Typography sx={{ fontSize: "1.1rem" }}>Traffic source</Typography>
          </Box>
          <Box className={style.PieChart}>
            <PieChart
              series={[
                {
                  data: Piedata,
                  outerRadius: 130,
                  innerRadius: 90,
                },
              ]}
              slotProps={{ legend: { hidden: true } }}
              height={300}
              sx={{width:'100%'}}
            />
          </Box>
          <Box className={style.OverviewPieLabels}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Box>
                <PiDesktopLight />
              </Box>
              <Box>Desktop</Box>
              <Box>63%</Box>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Box>
                <IoMdTabletPortrait />
              </Box>
              <Box>Tablet</Box>
              <Box>15%</Box>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Box>
                <MdOutlineLocalPhone />
              </Box>
              <Box>Phone</Box>
              <Box>22%</Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box className={style.OverviewTableCon}>
        <Box className={style.OverviewListCon}>
          <Box className={style.OverviewListHead}>
            <Typography sx={{ fontSize: "1.3rem" }}>Latest products</Typography>
          </Box>
          <List>
            {ListArray.map((ele) => {
              return (
                <ListItem
                  secondaryAction={<BsThreeDotsVertical />}
                  sx={{ borderBottom: "1px solid lightgrey" }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ borderRadius: ".3rem" }} src={ele.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={ele.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="#6B728E"
                        >
                          {ele.date}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
          <Box className={style.OverviewListButton}>
            <Typography>View all </Typography>
            <GoArrowRight style={{ fontSize: "1.3rem" }} />
          </Box>
        </Box>
        <Box className={style.OverviewTable}>
          <Box className={style.OverviewListHead}>
            <Typography sx={{ fontSize: "1.3rem" }}>Latest Orders</Typography>
          </Box>
          <div
            className={style.aggridwrapper}
            style={{ height: "75%", width: "100%" }}
          >
            <AgGridReact
              rowData={rowData}
              columnDefs={colData}
              rowSelection={"multiple"}
              rowHeight={60}
              defaultColDef={defaultColDef}
              headerHeight={60}
              className="ag-theme-material"
            />
          </div>
          <Box className={style.OverviewTableButton}>
            <Typography>View all </Typography>
            <GoArrowRight style={{ fontSize: "1.3rem" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
