import LeftMenuComponent from "../extension/LeftMenuComponent"
import RightMenuComponent from "../extension/RightMenuComponent"

function HeaderComponent () {
    return (<header>
    <LeftMenuComponent/>
    <RightMenuComponent/>
  </header>
    )
}

export default HeaderComponent