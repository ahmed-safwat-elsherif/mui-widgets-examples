import {
  Box,
  CssBaseline,
  Divider,
  GlobalStyles,
  Stack,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ChatApp from "./examples/ChatApp";
import ContactList from "./examples/ContactList";
import DashboardWidget from "./examples/DashboardWidget";
import LoginForm from "./examples/LoginForm";
import NotificationExample from "./examples/NotificationExample";
import ProductCard from "./examples/ProductCard";
import SelectForm from "./examples/SelectForm";
import SimpleTabs from "./examples/SimpleTabs";
import MusicPlayer from "./examples/MusicPlayer";
import { Route, Routes } from "react-router";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Navbar from "./components/Navbar";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          button: {
            fontFamily: "inherit",
          },
        }}
      />
      <CssBaseline />
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Task1 />} />
        <Route path="/task-1" element={<Task1 />} />
        <Route path="/task-2" element={<Task2 />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
