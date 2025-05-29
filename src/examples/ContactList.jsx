import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function ContactList() {
  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h6">Contact List</Typography>
      <Divider sx={{ my: 1 }} />
      <List>
        {["Ahmed", "Nour", "Mona"].map((name, idx) => (
          <ListItem
            key={idx}
            secondaryAction={
              <IconButton edge="end">
                <Delete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary="Online" />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
