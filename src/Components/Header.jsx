import RightMenuComponent from "./Header/RightMenu";
import LeftMenuComponent from "./Header/LeftMenu";

function HeaderComponent() {
    return (
        <header>
            <LeftMenuComponent/>
            <RightMenuComponent/>
        </header>
    )
}

export default HeaderComponent