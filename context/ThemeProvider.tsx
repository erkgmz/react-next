import React, { useState, useEffect, ReactNode } from 'react';

export const ThemeContext = React.createContext([{}, () => {}]);

export const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const isLightRange = currentHour >= 7 && currentHour <= 18;
  const [theme, setTheme] = useState(isLightRange ? 'light' : 'dark');

  useEffect(() => {
    // initial theme set
    setCurrentHour(new Date().getHours());

    // interval watch for hour change
    const intervalId = setInterval(() => {
      if (currentHour !== new Date().getHours()) {
        setCurrentHour(new Date().getHours());
        (setTheme as Function)(isLightRange ? 'light' : 'dark');
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentHour, isLightRange]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
