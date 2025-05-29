import {
  Paper,
  Typography,
  Grid,
  Avatar,
  LinearProgress,
  Stack,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

export default function DashboardWidget() {
  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Monthly Sales</Typography>
        <Tooltip title="More options">
          <IconButton>
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2} alignItems="center">
        <Grid>
          <Avatar>💰</Avatar>
        </Grid>
        <Grid>
          <Typography variant="h4">$14,500</Typography>
          <LinearProgress value={70} variant="determinate" />
        </Grid>
      </Grid>
    </Paper>
  );
}
