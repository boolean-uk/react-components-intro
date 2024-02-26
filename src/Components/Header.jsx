import LeftMenuComponent from "./Header/LeftMenu";
import RightMenuComponent from "./Header/RightMenu";

function HeaderComponent() {
    return(
    <header>
        <LeftMenuComponent />
        <RightMenuComponent />
    </header>)
}

export default HeaderComponent;