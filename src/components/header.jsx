import Nav from "./nav"

function HeaderComponent()
{
  return (
    <header>
        <Nav.LeftNav/>
        <Nav.RightNav/>
    </header>
  )
}

export default HeaderComponent