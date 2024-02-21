import "./_header/Header.css";
import _NavLeft from "./_header/_NavLeft";
import _NavRight from "./_header/_NavRight";

function Header() {
  return (
    <>
      <header>
        <_NavLeft></_NavLeft>
        <_NavRight></_NavRight>
      </header>
    </>
  );
}

export default Header;
