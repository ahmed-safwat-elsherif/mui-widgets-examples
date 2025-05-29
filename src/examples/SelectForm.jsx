import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Divider,
} from "@mui/material";

export default function SelectForm() {
  const [lang, setLang] = useState("");

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h5">Choose Language</Typography>
      <Divider sx={{ my: 2 }} />
      <FormControl fullWidth>
        <InputLabel>Language</InputLabel>
        <Select
          value={lang}
          label="Language"
          onChange={(e) => setLang(e.target.value)}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ar">Arabic</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </Select>
      </FormControl>
      <Box mt={3}>
        <Stack spacing={2}>
          <Button variant="contained">Submit</Button>
          <Typography>Selected: {lang}</Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
