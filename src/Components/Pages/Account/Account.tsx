import {
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  TextField,
} from "@mui/material";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";

export default function Account() {
  return (
    <>
      <Box>
        <Typography variant="body1">Account</Typography>
      </Box>
      <Box>
        <Box>
          <Card>
            <CardContent>
              <Avatar src="https://cdn.pixabay.com/photo/2023/05/06/06/48/ai-generated-7973667_1280.jpg"></Avatar>
              <Typography variant="h6">Sofia Rivers</Typography>
              <Typography variant="body2">Los Angeles USA</Typography>
              <Typography variant="caption">GTM-7</Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <Button>Upload Picture</Button>
            </CardActions>
          </Card>
        </Box>
        <Box>
          <Box>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">
              The Information can be edited
            </Typography>
          </Box>
          <Box>
            <TextField label="First name" />
            <TextField label="Last name" />
            <TextField label="Email address" />
            <TextField label="Phone number" />
            <TextField label="State" />
            <TextField label="City" />
          </Box>
          <Box>
            <Button>Save details</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
