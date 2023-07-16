import React, {
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

const TEN_MINUTES = 600000;

export type IThemeSetter = [
  'light' | 'dark',
  Dispatch<SetStateAction<'light' | 'dark'>>,
];

export const ThemeContext = React.createContext([]);

export const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const isLightRange = currentHour >= 7 && currentHour <= 18;
  const [theme, setTheme]: IThemeSetter = useState('light');

  useEffect(() => {
    // initial theme set
    setCurrentHour(new Date().getHours());

    // interval watch for hour change
    const intervalId = setInterval(() => {
      if (currentHour !== new Date().getHours()) {
        setCurrentHour(new Date().getHours());
        setTheme(isLightRange ? 'light' : 'dark');
      }
    }, TEN_MINUTES);

    return () => clearInterval(intervalId);
  }, [currentHour, isLightRange]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
