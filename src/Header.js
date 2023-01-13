// importing left menu
import LeftMenu from "./LeftMenu.js"
// importing rightmenu
import RightMenu from "./RightMenu.js"
function Header(){
    return (
    <header>
    <LeftMenu />
    <RightMenu />

  </header>
    )
}

export default Header