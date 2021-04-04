import { IThemeSetter, ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';

const useTheme = (): IThemeSetter => {
  const [theme, setTheme] = useContext(ThemeContext);
  return [theme, setTheme];
};

export default useTheme;
