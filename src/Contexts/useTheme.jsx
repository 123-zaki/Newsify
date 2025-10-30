import { createContext, useEffect, useState } from "react";

export const useTheme = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')) ?? false);

  useEffect(() => {
    const root = document.documentElement;
    console.log(root);
    if(isDark) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }

    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <useTheme.Provider value={[isDark, setIsDark]}>
      {children}
    </useTheme.Provider>
  );
}
