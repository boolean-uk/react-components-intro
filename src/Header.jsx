import './App.css'
import LeftMenu from './Components/HeaderLeftMenu.jsx'
import RightMenu from './Components/HeaderRightMenu.jsx'

function Header() {
    return (
        <header>
            <LeftMenu />
            <RightMenu />
      </header>
    )
}

export default Header;