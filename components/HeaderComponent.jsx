import LeftMenuComp from "./LeftMenuComp.jsx";
import RightMenuComp from "./RightMenuComp.jsx/index.js";

export default function HeaderComponent() {
    return (
      <header>
          <LeftMenuComp />
          <RightMenuComp />
      </header>
    )
  }