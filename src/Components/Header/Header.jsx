import HeaderLeftMenu from './HeaderLeftMenu/HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu/HeaderRightMenu';
import './Header.css'

const Header = () => {
    return (
        <header>
            <HeaderLeftMenu></HeaderLeftMenu>
            <HeaderRightMenu></HeaderRightMenu>
        </header>
    )
}

export default Header;