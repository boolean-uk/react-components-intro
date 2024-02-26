import './App.css'
import LeftMenu from './LeftMenu.jsx'
import RightMenu from './RightMenu.jsx'

function HeaderComponent() {
  return (
    <div className="Style">
      <header>
        <LeftMenu/>
        <RightMenu/>
      </header>
      </div>
  )
}

export default HeaderComponent;
