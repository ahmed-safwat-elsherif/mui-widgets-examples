import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  TextField,
  IconButton,
  Divider,
  Stack,
  InputAdornment,
} from "@mui/material";
import { Send, TagFaces as TagFacesIcon } from "@mui/icons-material";
export default function ChatApp() {
  const [messages, setMessages] = useState([
    { sender: "Ahmed", text: "Hello!" },
    { sender: "You", text: "Hi, how are you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        height: "500px",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Chat Header */}
      <Box p={2} borderBottom="1px solid #ddd">
        <Typography variant="h6">Chat with Ahmed</Typography>
      </Box>

      {/* Chat Messages */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
        <List>
          {messages.map((msg, idx) => (
            <ListItem key={idx} alignItems="flex-start">
              <ListItemText
                primary={
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar sx={{ width: 24, height: 24 }}>
                      {msg.sender[0]}
                    </Avatar>
                    <Typography variant="subtitle2">{msg.sender}</Typography>
                  </Stack>
                }
                secondary={msg.text}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      {/* Bottom Input Area */}
      <Box p={2}>
        <Stack direction="row" spacing={1}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            fullWidth
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <TagFacesIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <IconButton color="primary" onClick={handleSend}>
            <Send />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  );
}
