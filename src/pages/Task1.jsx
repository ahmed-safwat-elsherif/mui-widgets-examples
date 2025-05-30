import { Box, Divider, Stack, Typography } from "@mui/material";
import ChatApp from "../examples/ChatApp";
import LoginForm from "../examples/LoginForm";
import ContactList from "../examples/ContactList";
import DashboardWidget from "../examples/DashboardWidget";
import NotificationExample from "../examples/NotificationExample";
import ProductCard from "../examples/ProductCard";
import SelectForm from "../examples/SelectForm";
import SimpleTabs from "../examples/SimpleTabs";

const widgets = [
  { label: "Chat App", Component: ChatApp },
  // { label: "Contact List", Component: ContactList },
  // { label: "Dashboard Widget", Component: DashboardWidget },
  { label: "Login Form", Component: LoginForm },
  // { label: "Notification Example", Component: NotificationExample },
  { label: "Product Card", Component: ProductCard },
  { label: "Select Form", Component: SelectForm },
  // { label: "Simple Tabs", Component: SimpleTabs },
];

const Task1 = () => {
  return (
    <Stack
      spacing={5}
      maxWidth={600}
      mx="auto"
      py={3}
      divider={<Divider flexItem />}
    >
      {widgets.map(({ label, Component }) => (
        <Box key={label}>
          <Typography variant="h1" fontSize={30} gutterBottom>
            {label}
          </Typography>
          <Component />
        </Box>
      ))}
    </Stack>
  );
};

export default Task1;
