import '../../App.css';
import LeftMenu from './leftMenu';
import RightMenu from './rightMenu';

function Header () {
  return (
    <header>
      <LeftMenu />
      <RightMenu />
  </header>
  )
}

export default Header;