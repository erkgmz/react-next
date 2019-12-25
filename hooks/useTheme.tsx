import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return [theme, setTheme];
};

export default useTheme;
