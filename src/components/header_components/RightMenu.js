import AvatarImage from "./AvatarImage"
import MenuIcon from "./MenuIcon"

function RightMenu() {
  return (
    <nav className="right-menu">
      <ul>
        <li>Gmail</li>
        <li>Images</li>
        <li>
          <MenuIcon />
        </li>
        <li>
          <AvatarImage />
        </li>
      </ul>
    </nav>
  )
}

export default RightMenu