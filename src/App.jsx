import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
