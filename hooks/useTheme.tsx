import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return 'dark';
};

export default useTheme;
