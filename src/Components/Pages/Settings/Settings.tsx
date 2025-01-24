import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Button,
  TextField,
} from "@mui/material";

export default function Settings() {
  return (
    <Box>
      <Box>
        <Typography>Settings</Typography>
      </Box>
      <Box>
        <Box>
          <Typography>Notifications</Typography>
          <Typography>Manage the Notifications</Typography>
        </Box>
        <Box>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Product updates"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Security updates"
              />
            </FormGroup>
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Email" />
              <FormControlLabel
                control={<Checkbox />}
                label="Security updates"
              />
            </FormGroup>
          </Box>
        </Box>
        <Box>
          <Button>Save changes</Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography>Password</Typography>
          <Typography>Update Password</Typography>
        </Box>
        <Box>
          <Box>
            <TextField label="Password" />
            <TextField label="Confirm password" />
          </Box>
        </Box>
        <Box>
          <Button>Update</Button>
        </Box>
      </Box>
    </Box>
  );
}
