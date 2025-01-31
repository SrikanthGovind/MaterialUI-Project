import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
} from "@mui/material";
import { BiExport, BiPlus } from "react-icons/bi";
import { CgImport } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { Cardsdata } from "../../Utility/data";
import { useStyels } from "./integrations.style";
export default function Integrations() {
  const style = useStyels();
  
  return (
    <Box className={style.IntegrationsCon}>
      <Box className={style.IntegrationHead}>
        <Box>
          <Typography className={style.IntegrationText}>
            Integrations
          </Typography>
          <Box>
            <Box>
              <List className={style.IntegrationListCon}>
                <ListItem disablePadding className={style.IntegrationListItem}>
                  <ListItemButton>
                    <ListItemIcon className={style.IntegrationListIcon}>
                      <CgImport />
                    </ListItemIcon>
                    <ListItemText primary="Import" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className={style.IntegrationListItem}>
                  <ListItemButton>
                    <ListItemIcon className={style.IntegrationListIcon}>
                      <BiExport />
                    </ListItemIcon>
                    <ListItemText primary="Export" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box></Box>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              bgcolor: "#635bff",
              color: "white",
              textTransform: "none",
              borderRadius: ".8rem",
              padding: ".1rem .9rem .1rem .5rem",
              display: "flex",
              gap: ".3rem",
            }}
          >
            <IconButton sx={{ color: "white" }}>
              <BiPlus />
            </IconButton>
            <Typography component={"span"}>Add</Typography>
          </Button>
        </Box>
      </Box>
      <Box className={style.IntegrationSearch}>
        <TextField
          placeholder="Search integration"
          className={style.IntegrationTextFields}
          InputProps={{
            type: "search",
            startAdornment: (
              <InputAdornment position="start" sx={{ fontSize: "1.6rem" }}>
                <CiSearch />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <Grid container spacing={3} className={style.IntegrationCardsCon}>
          {Cardsdata.map((ele, index) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                <Card className={style.IntegrationCard} sx={{ boxShadow: "0" }}>
                  <CardContent className={style.CardContent}>
                    <CardMedia
                      component="img"
                      image={ele.img}
                      alt="Dropbox"
                      sx={{ width: "50px", height: "50px" }}
                    />
                    <Typography variant="h5">{ele.title}</Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        paddingInline: "1.5rem",
                        fontWeight: "300",
                      }}
                    >
                      {ele.description}
                    </Typography>
                  </CardContent>
                  <CardContent className={style.CardReviews}>
                    <Box className={style.CardReviewItem}>
                      <IconButton className={style.CardIcon}>
                        <IoTimeOutline />
                      </IconButton>
                      <Typography className={style.CardText}>
                        Updated {ele.date}
                      </Typography>
                    </Box>
                    <Box className={style.CardReviewItem}>
                      <IconButton className={style.CardIcon}>
                        <CgImport />
                      </IconButton>
                      <Typography className={style.CardText}>
                        {ele.ratings} installs
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBlock: "1rem",
        }}
      >
        <Stack spacing={2}>
          <Pagination count={3} />
        </Stack>
      </Box>
    </Box>
  );
}
