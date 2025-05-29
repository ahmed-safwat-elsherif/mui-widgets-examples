import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  Divider,
  IconButton,
  Stack,
  Badge,
  Tooltip,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";

export default function SimpleTabs() {
  const [tab, setTab] = useState(0);

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">My Dashboard</Typography>
        <Tooltip title="Notifications">
          <IconButton>
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </Tooltip>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)}>
        <Tab label="Home" />
        <Tab label="Profile" />
        <Tab label="Settings" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {tab === 0 && <Typography>Welcome to Home</Typography>}
        {tab === 1 && <Typography>Your Profile Info</Typography>}
        {tab === 2 && <Typography>App Settings</Typography>}
      </Box>
    </Paper>
  );
}
