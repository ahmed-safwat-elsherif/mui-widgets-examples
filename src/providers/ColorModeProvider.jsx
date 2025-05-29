import {
  colors,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const getDesignMode = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary:
        mode === "light"
          ? {
              main: colors.orange[500],
              light: colors.orange[100],
              dark: colors.orange[800],
            }
          : {
              main: colors.orange[500],
              light: colors.orange[100],
              dark: colors.orange[800],
            },
      secondary: {
        main: "#3f51b5",
      },
      text: {
        primary: mode === "light" ? "#000" : "#fff",
      },
    },
    typography: {
      h1: {
        fontSize: "48px",
        fontWeight: "600",
        color: mode === "light" ? "#3f51b5" : "#8d9df5",
        textShadow: "0 0.4rem 0.4rem #00000038",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: "600",
      },
      h3: {
        fontSize: "1.8rem",
        fontWeight: "500",
      },
      h4: {
        fontSize: "22px",
        color: mode === "light" ? "#000000de" : "white",
      },
      h5: {
        fontSize: "20px",
      },
      caption: {
        color: mode === "light" ? "#0000008a" : "#fff",
        fontSize: "0.9rem",
      },
      subtitle1: {
        color: mode === "light" ? "#000000b3" : "#fff",
        fontSize: "0.9rem",
      },
    },
  });
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export function ColorModeProvider({ children }) {
  const isDarkModeMatch = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState("light");
  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    setMode(isDarkModeMatch ? "dark" : "light");
    console.log({ isDarkModeMatch });
  }, [isDarkModeMatch]);

  const theme = useMemo(() => getDesignMode(mode), [mode]);
  const contextValues = useMemo(
    () => ({
      toggleColorMode,
    }),
    [toggleColorMode]
  );
  return (
    <ColorModeContext.Provider value={contextValues}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
