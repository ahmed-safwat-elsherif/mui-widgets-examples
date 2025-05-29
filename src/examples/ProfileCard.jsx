import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  Stack,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";

const ProfileCard = () => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Avatar sx={{ width: 80, height: 80 }}>A</Avatar>
          <Typography variant="h5">Your Name</Typography>
          <Typography color="text.secondary">Frontend Developer</Typography>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <Box flexGrow={1}>
          <IconButton>
            <Favorite color="error" />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </Box>
        <Button variant="contained">Follow</Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
