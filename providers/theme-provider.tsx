import { createContext, useState, useEffect, useContext } from 'react';
const ThemeContext = createContext('');

const ThemeContextProvider = props => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const isLightRange = currentHour >= 7 && currentHour <= 18;
  const [theme, setTheme] = useState(isLightRange ? 'light' : 'dark');

  useEffect(() => {
    // setup a timer that watches for a time change
    // transition themes light/dark when/if the appropriate hour change occurs
    const timer = setInterval(() => {
      if (currentHour !== new Date().getHours()) {
        setCurrentHour(new Date().getHours());
        setTheme(isLightRange ? 'light' : 'dark');
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentHour, isLightRange]);

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
