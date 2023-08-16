import './../styles.css'
import HeaderRightList from './HeaderRightList'
import HeaderLeftList from './HeaderLeftList'

function Header() {
    return (
        <header>
            <nav className="left-menu">
                <HeaderLeftList />
            </nav>
            <nav className="right-menu">
                <HeaderRightList />
            </nav>
        </header>
    )
}

export default Header