import LeftMenuComponent from "./headers/LeftMenu.jsx"
import RightMenuComponent from "./headers/RightMenu.jsx"

function HeaderComponent() {
    return (
        <header>
          <LeftMenuComponent/>
          <RightMenuComponent/>
        </header>
        )
}

export default HeaderComponent