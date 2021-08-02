const Header = ({ watched, data }) => {
  return (
    <>
      <header className={"header section--header"}>
        <nav className={"navbar header__navbar"}>
          <a className={"navbar__link"} href="/">
            All Movies: {data.length}
          </a>
          <a className={"navbar__link"} href="/">
            Watched: {watched.length}
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
