import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
  Stack,
  Link,
  Box,
} from "@mui/material";

const LoginForm = () => {
  return (
    <Container maxWidth="xs">
      <Paper sx={{ p: 4, mt: 8 }}>
        <Stack spacing={3}>
          <Typography variant="h4" textAlign="center">
            Login
          </Typography>
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button variant="contained" fullWidth>
            Login
          </Button>
          <Box textAlign="center">
            <Link href="#">Forgot password?</Link>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default LoginForm;
