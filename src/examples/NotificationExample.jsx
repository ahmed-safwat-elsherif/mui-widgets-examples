import { useState } from "react";
import {
  Snackbar,
  Alert,
  Button,
  Stack,
  Switch,
  FormControlLabel,
  Paper,
  Typography,
  Divider,
} from "@mui/material";

const NotificationExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Paper sx={{ p: 4, m: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h5">Notification Example</Typography>
        <Divider />
        <FormControlLabel control={<Switch />} label="Enable notifications" />
        <Button variant="contained" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      </Stack>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Notification sent!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default NotificationExample;
