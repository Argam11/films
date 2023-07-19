import { createContext, useContext, useState } from "react";

const useThemeProvider = (currentTheme) => {
  const [theme, setTheme] = useState(currentTheme);

  return {
    theme,
    setTheme,
  };
};

const ThemeContext = createContext({ theme: "dark", setTheme: () => {} });

export const ThemeProvider = ({ theme, children }) => {
  const data = useThemeProvider(theme);
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
