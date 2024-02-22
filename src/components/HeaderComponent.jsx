import Nav from "./NavComponent"
import LeftMenu from "./LeftMenuComponent"

export default function Header () {
    return <>
    <header>
        <LeftMenu/>
        <Nav/>
      </header>
    </>
}