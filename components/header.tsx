import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeProvider';
import useTheme from '../hooks/useTheme';

const Header = (): JSX.Element => {
  const [theme] = useTheme();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="//www.linkedin.com/in/erkgmz/">LinkedIn</a>
          </li>
          {/* <li>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </li> */}
        </ul>
        <style jsx>{`
          header {
            background: ${COLORS.BG_BLUE};
          }

          nav {
            padding: 20px;
          }

          nav > ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: flex-end;
            box-sizing: border-box;
          }

          li {
            font-weight: 700;
            list-style: none;
          }

          li a {
            font-size: 13px;
            letter-spacing: 1px;
            color: ${COLORS.WHITE};
          }
        `}</style>
      </nav>
    </header>
  );
};

export default Header;
