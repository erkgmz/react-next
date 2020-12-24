const Header = (): JSX.Element => (
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
        display: flex;
        padding: 6px 10px;
        font-weight: 700;
      }

      li a {
        font-size: 13px;
        letter-spacing: 1px;
      }
    `}</style>
  </nav>
);

export default Header;
