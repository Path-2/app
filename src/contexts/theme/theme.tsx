import React from "react";
import { dark, light } from "./styles";

const ThemeContext = React.createContext({
  isDark: false,
  colors: light,
  setSchema: (schema: string) => {},
});

export const ThemeProvider = (props: any): JSX.Element => {
  const colorScheme = localStorage.getItem("schema") || "dark";
  /*
   * To enable changing the app theme dynamically in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = React.useState(colorScheme === "dark");

  // Listening to changes of device appearance while in run-time
  React.useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const defaultTheme = React.useMemo(
    () => ({
      isDark,
      // Changing color schemes according to theme
      colors: isDark ? dark : light,
      // Overrides the isDark value will cause re-render inside the context.
      setSchema: (schema: any) => setIsDark(schema === "dark"),
    }),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
