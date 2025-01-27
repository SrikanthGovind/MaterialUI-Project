import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  settingsCon: {
    padding: "4rem 2rem",
  },
  settingsText: {
    marginBottom: "2rem !important",
  },
  settingFormCon: {
    border: "1px solid lightgrey",
    borderRadius: "1rem",
    marginBottom: "2rem !important",
  },
  settingsHead: {
    padding: "1rem 2rem",
    borderBottom: "1px solid lightgrey",
  },
  settingsTextHead: {
    "&.MuiTypography-root": {
      fontSize: "1.4rem",
    },
  },
  settingsTextPara: {
    "&.MuiTypography-root": {
      color: "grey",
      fontWeight: "200",
    },
  },
  CheckboxCon: {
    display: "flex",
    gap: "20rem",
    padding: "2rem",
    borderBottom: "1px solid lightgrey",
  },
  checkboxItem: {
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
  },
  checkbox: {
    "&.Mui-checked": {
      color: "#635bff !important",
    },
  },
  settingsPasswordcon:{
    border: "1px solid lightgrey",
    borderRadius: "1rem",
  },
  PasswordHead:{
    padding: "1rem 2rem",
    borderBottom: "1px solid lightgrey",
  },
  PasswordTextHead:{
    "&.MuiTypography-root": {
        fontSize: "1.4rem",
      },
  },
  PasswordTextPara:{
    "&.MuiTypography-root": {
        color: "grey",
        fontWeight: "200",
      },
  },
   Updatepassword:{
    borderBottom: "1px solid lightgrey",
    padding:'2rem',
    display:'flex',
    flexDirection:'column',
    gap:'2rem'
  },
  formFields:{
     width:'55%',
         "& .MuiInputLabel-root": {
      color: "lightblack",
      fontSize:'1.1rem',
      fontWeight:"200",

      '&.Mui-focused': {
        color: 'gray',
      },
    },

     "& .MuiOutlinedInput-root": {
        borderRadius: ".5rem",
        "&:hover fieldset": {
          borderColor: "lightgrey",
        },
        "&.Mui-focused fieldset": {
          borderColor: "lightgrey",
          color:'grey'
        },
  }
}
});

export default function Settings() {
  const style = useStyles();
  return (
    <Box className={style.settingsCon}>
      <Box>
        <Typography className={style.settingsText} sx={{ fontSize: "2.5rem" }}>
          Settings
        </Typography>
      </Box>
      <Box className={style.settingFormCon}>
        <Box className={style.settingsHead}>
          <Typography className={style.settingsTextHead}>
            Notifications
          </Typography>
          <Typography className={style.settingsTextPara}>
            Manage the Notifications
          </Typography>
        </Box>
        <Box className={style.CheckboxCon}>
          <Box className={style.checkboxItem}>
            <Typography>Email</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox className={style.checkbox} />}
                label="Product updates"
              />
              <FormControlLabel
                control={<Checkbox className={style.checkbox} />}
                label="Security updates"
              />
            </FormGroup>
          </Box>
          <Box className={style.checkboxItem}>
            <Typography>Phone</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox className={style.checkbox} />}
                label="Email"
              />
              <FormControlLabel
                control={<Checkbox className={style.checkbox} />}
                label="Security updates "
              />
            </FormGroup>
          </Box>
        </Box>
        <Box sx={{ padding: ".7rem", textAlign: "end" }}>
          <Button
            sx={{
              bgcolor: "#635bff",
              color: "white",
              padding: ".5rem 1.1rem",
              textTransform: "none",
              borderRadius: ".8rem",
            }}
          >
            Save changes
          </Button>
        </Box>
      </Box>
      <Box className={style.settingsPasswordcon}>
        <Box className={style.PasswordHead}>
          <Typography className={style.PasswordTextHead}>Password</Typography>
          <Typography className={style.PasswordTextPara}>Update Password</Typography>
        </Box>
        <Box className={style.Updatepassword}>
            <TextField label="Password" className={style.formFields} />
            <TextField label="Confirm password" className={style.formFields} />
        </Box>
        <Box sx={{ padding: ".7rem", textAlign: "end" }}>
          <Button
            sx={{
              bgcolor: "#635bff",
              color: "white",
              padding: ".5rem 1.1rem",
              textTransform: "none",
              borderRadius: ".8rem",
            }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
