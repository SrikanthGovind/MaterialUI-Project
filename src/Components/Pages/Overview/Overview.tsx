import { Avatar, Box, Stack, Typography } from "@mui/material";

import { GoArrowUp } from "react-icons/go";

import { MdOutlinePeopleAlt } from "react-icons/md";

import { GoArrowDown } from "react-icons/go";

import { TfiMenuAlt } from "react-icons/tfi";

import { RiMiniProgramLine } from "react-icons/ri";

// import { BarChart } from "@mui/icons-material";

export default function Overview() {
  return (
    <div>
      <Box>
        <Box>
          <Box>
            <Box>
              <Typography>Budget</Typography>

              <Typography>$24k</Typography>
            </Box>

            <Box>
              <Avatar>$</Avatar>
            </Box>
          </Box>

          <Box>
            <Stack>
              <GoArrowUp />

              <Typography component={"span"}>12%</Typography>
            </Stack>

            <Typography>Since last month</Typography>
          </Box>
        </Box>

        <Box>
          <Box>
            <Box>
              <Typography>Total customers</Typography>

              <Typography>$1.6k</Typography>
            </Box>

            <Box>
              <Avatar>
                <MdOutlinePeopleAlt />
              </Avatar>
            </Box>
          </Box>

          <Box>
            <Stack>
              <GoArrowDown />

              <Typography component={"span"}>16%</Typography>
            </Stack>

            <Typography>Since last month</Typography>
          </Box>
        </Box>

        <Box>
          <Box>
            <Box>
              <Typography>Task progress</Typography>

              <Typography>75.5%</Typography>
            </Box>

            <Box>
              <Avatar>
                <TfiMenuAlt />
              </Avatar>
            </Box>
          </Box>

          <Box>progess</Box>
        </Box>

        <Box>
          <Box>
            <Box>
              <Typography>Total profit</Typography>

              <Typography>$15k</Typography>
            </Box>

            <Box>
              <Avatar>
                <RiMiniProgramLine />
              </Avatar>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box></Box>

        <Box></Box>
      </Box>

      <Box></Box>
    </div>
  );
}
