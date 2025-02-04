import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { useStyles } from "./Settings.style";

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
          <Typography className={style.PasswordTextPara}>
            Update Password
          </Typography>
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
