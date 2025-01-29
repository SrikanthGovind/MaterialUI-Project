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
import { makeStyles } from "@mui/styles";
import {cards}from '../../Utility/typescript'

const useStyels = makeStyles({
  IntegrationsCon: {
    padding: " 4rem 2rem",
  },
  IntegrationHead: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
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
    width: "40%",
    "& .MuiOutlinedInput-root": {
      borderRadius: ".6rem",
    },
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
    height: "80%",
  },
  CardReviews: {
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&.MuiCardContent-root": {
      padding: ".7rem",
    },
  },
  CardReviewItem: {
    display: "flex",
    alignItems: "center",
  },
  CardText: {
    "&.MuiTypography-root": {
      fontWeight: "100",
    },
  },
  CardIcon: {
    "&.MuiButtonBase-root": {
      fontSize: "1rem",
    },
  },
});


export default function Integrations() {
  const style = useStyels();
  const cards:cards[] = [
    {
      img: "data:image/png;base64,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",
      title: "Dropbox",
      description:"Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
      date: "Mar 8, 2024",
      ratings: 549,
    },
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABAlBMVEX///8Bq2wK43Ay/I4UyGf//f///v1y/KsAq2kq/YoZsnYBq2sBqm4FsGv6/v85t3//+v/5/f/5//sA42wApWQQymf2//kApGAA42gA32gM4G//+vwCrmwE6HAAp2gA5GMAyVoi8oIAxVwN3W8m9YXs/vDF6Nk5tYHD4dXe+O7/9fyQ7rdF5Ygt6H2X8sBKtYhZwZWn9MSS0bVjxJou5YBRvoxq659tw5/I89rb7+jb+uay8sZyzKO39tGI7rJT6ZK/+NVm1pUzy3aV4rOy6s5x4aXX/ehH0IWp58Iiv2Vt66YxzXgj3nhM25Fe6pggwnMk0XOG5K84+JSP/L+95dOC/bgn0k6zAAAJCElEQVR4nO2daVsaSRCAG5hux6Btz8AMN0YQXFfNxkSTaMxpNtFNdjcb8f//la0e8ADm6LmgeZ56P8R8seWlqquqR5khBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBFlRuM//slzbJpRwxlnmiytDuT38bZ9YnIusl+a/Dw4Ojz48cykXjNGsl1eF8j9qm7XnQyYyjyEdHNW3G5X60bFNLLK8KL7Y3NgodGun+9kvfVgsFpvNYnP75NjN/g1UZsvcKABm9eWQEMviGWUTZ/S44QkClfoJxBE241IC+cQseJTL1Zf71KYZvdfUcosP9OuVk2cMtoS1hO34pF0uTBw3a6fnWS1ri1eN4mPqsB9dQe2sfoA6dzEsFDYK5Wrt9VkGa0Kq22+2pwQhX2WuWoIsvHM8GHpUzZdnxGql2o6CQw86mQ7h2HJcc0SLLDJZZwwL3eomOKbajjbj9KBRbM4rViqNo2MoaAstrLOG7c12tfY8Va6yljhvFCs+MewUO83to7eL7R2zhrLkQO+4OJfTQLIXAgPMP5WKTwghrE2vd7yVvYMvqHn4GHr7sfsaZoBWwvf6nc8mfOQJveOYyVxdyHYMMCybMAMknXPckzBBUKwU6ztvmRAL6R1BhoUu7MfX8R0h+cj7ul+KPsrVfnHcO+giohhgOLasmhdnhLdaMV4HJPZ506fK+NA4eWdDZ6E5W4YaQvOQ/ZFZ6utZlH2odFQE+51+8+QY5rucFUMMpWQbcvUiTu/g5G14jj7K1k6n0jjJvXeEGsJuhGOHWbuA/UjVxgDm/vC2mhL9JswAkKswBvGsZv54hneiVRPmVbWDAY0oM/OWlfqHdzbsRt5aliFsx3YXZgC1XP263Y9nCMlaqR9+zK93RBvC8apdlr3jQqV3nFT6MQVlHDv1w+N8/NSydEK1e7H/e9hawiXH9Xh+91S2Dz/a1F2uYbttFs7C6oEtXL+BWwnoHfX3Io9LcsqGsB3LG5ufwtZi9FXoQBpGp1lsrOVyrIpjWNjYfPqFBLzPFE7Nb7ZjbsJHMQTJtVzKaYwslYbGZzeg5sFZCw72MevoA/CN62s0j/NUHEPIUqN3GXCsg+HroNFJbFhs7mhgKGNoOOf+U6rg55Vi4iQFShoYlj3DT8T3siq1XyXtFB67mhg6hmN8kReb5g3DD/YRNHdKmhhCDJ1/fYuNe5R8D0KdKeljaBi9P8Xc9VRO3yft9Z7hrlaGhvN1xhAO6l8bnWLiNJU5qpWh8W3mldjC/qB6JvSlpJmh07uaXoSRd/VKJbnjrm6GhnN99nB1hRFOBj/S7MJxCPUy7H1i/K7xwyYkf22nKaQlDQ2ve28eloCJu54mhDs6GhrON37fE1v8sNNUuoDoT0lDQ+Dp5d0KVvKDvceupoaGcX/FYZDG7z5HtTO87t0f9/+Kef1wmpKuhjC8jYgruC3epJm4H4VQP0PnuyVcLviPFEXmcQj1MzSMS/k7m2f1Topz767ehk/3LT5IMaxN5aiOho7xt2D/pNqFJb0NYXj78jFNHW3u6m5oGN8jfmMf6jedo5oaGmkurk3nqK6GTnLF5s5KGBpO8n1YWg3D5Hm6uyqGSYM4m6P6GhpOMsM5QX0Nk+XpXI7qbBg3iE3/EOpr6CQJoo+gvoYJmuJcK9TdMH6x8RPU2jBunvqUGd0N4zVF3xzV2zBmsfEX1NrQy1PlMAaEUHdDR/16VICg7obqeepfZlbAULXYBOWo/oaqQQwU1N9QTTEwR1fBUGWyCc7RVTA0fqTJ0ZUwjJ7Aw0K4CobReRomqIVhwfurrxDFsCA2IwR1MCwU2sbTsBCGN0X/U6FehhtbV9+NsBiG78RwQS0My3st9+p7L2wrhuRoSCvUxrCwxQVhV+HFJuhPayJyVA/D8hZv2YLYVz97gQUnME+jBHUxZMzmlLpX/wYZBhWbyBDqYsgpAUciHXte0Zkz7U/u9xE3hLoYTr6N8ZZ7+bPnI+hfT5tRZUY/Q5u0BDj6KvoIRueoboYWZdy2qO3bO3yCqCComeEEStxLozcTR8eY24cKOaqrIfRH9/LzbO+YC6KKoJ6Gli0/PiN7x5TibLFREtTTkLSYvIUHlbkqP05zl6/TxUalzGhrOIZzqKuO3I+OX56qCWptKOStH2TveEjW4sPn2JTKjOaG3LZb9qSuzjVFxRzV25Dcfepy0juuIZT9Trwc1d3QQ/YOGxx7zqMgquboihgyYZHB1WdPcXJvBWXBVTCE3kGYRcng8toBvDxVF8zL8PlmNzvDMXDCGvwH+7Hfj1Fm8jMc1crRZvEMW968+t9PoxErhDkZcvtJDjG06bh3NNTLTH4xJKOq2VaVVDOUvcN7qe5BaR1e+a/1pcaQiC/dblcxU1UNPajNqXsj9X4t05CC49mpqRjEWIactCxOBs9+rS83hpTASDl8XjPLkKtRoYwXQ2JDssJ+lI4qknntw7Ho2Vat246+oVIcwwkMesfBukrJydVQxvHUrGYawwmMc07sm1K0ZL6G8hOhw9NaRBSTGHIqBLNa7k0pKlNzNZww/KNWLZjBlTWJoSw5TDaQQZTjIgypGMF+NNvZGo6X5pYAR5AM7B2LMJQ3gxiG9I4UhjYXlqCDm5DesQhD+VYTOjqtjW98laUhDACMgaOcAQIkF2M45jfI1bJP1UljeAfk6noJHOctF2jIKBnt+eVqekMGzQPiuOwYchgpCdScuTTNIIaMCQozgF9dXWSWjq8sjfZq5elc7e5lcMs47t3wbf92d9ZxfS394vGgrdGT2lTrMPdi3I02DEYEG9zOxBEMF/xgAXmbf4ij+dgwo9v+MZtPese04YKfgkEtcKSeY7k8vqvwVkYxhO1o2ZYg57eyrE5iuX67aMM7oObAJNfudgvmRdaPbxBfbx+640eyrEeZQBzNqrxtcm2Y7cKMwLljsDa51rFGl/GAD8CSb+xoqwq8yOohLXfIgwen5zdyVr1hNOvllV+G9+/wxYscnrYjBwD5ZTDI4/azsVnaM5sWBKVZFVJdSfi0CwRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBUvM/EQUKRZEG/tEAAAAASUVORK5CYII=",
      title: "Medium Corporation",
      description:
        "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
      date: "Mar 7, 2024",
      ratings: 625,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqrMoFdSjFcJ93KLJYE4dAyFNzLDOMCNXAZNdQk4tD0KwdjMR4mo8GZjU3cuuBe039rU&usqp=CAU",
      title: "Slack",
      description:
        "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",
      date: "Mar 8, 2024",
      ratings: 406,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKN274YoRNg7pLecujnwSOZc3Oo8HHzBeheeM6Q9M6PLxLtb5EFfRaghqORwGPvdHUt4&usqp=CAU",
      title: "Lyft",
      description:
        "Lyft is an on-demand transportation company based in San Francisco, California.",
      date: "Mar 3, 2024",
      ratings: 857,
    },
    {
      img: "https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_512.png",
      title: "Github",
      description:
        "GitHub is a web-based hosting service for version control of code using Git.",
      date: "Mar 4, 2024",
      ratings: 835,
    },
    {
      img: "data:image/png;base64,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",
      title: "Squarespace",
      description:
        "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
      date: "Mar 2, 2024",
      ratings: 435,
    },
  ];

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
          {cards.map((ele, index) => {
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
