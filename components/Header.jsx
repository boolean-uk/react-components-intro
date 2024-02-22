import LeftMenuComp from "./LeftMenu.jsx";
import RightMenuComp from "./RightMenu.jsx";

export default function HeaderComponent() {
    return (
      <header>
          <LeftMenuComp />
          <RightMenuComp />
      </header>
    )
  }