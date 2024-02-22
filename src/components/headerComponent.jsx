
import LeftmenuComponent from "./headercomponent/LeftmenuComponent";
import RightmenuComponent from "./headercomponent/RightmenuComponent";

const HeaderComponent = () => {
  return (
    <div className="header-item">
      <header>
        <LeftmenuComponent/>
        <RightmenuComponent/>
        
      </header>
    </div>
  )
};

export default HeaderComponent;
