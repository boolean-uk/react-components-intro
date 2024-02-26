import LogoComponent from "./body/Logo.jsx"
import SearchBarComponent from "./body/SearchBar.jsx"
import ButtonsComponent from "./body/buttons/Buttons.jsx"

function BodyComponent() {
    return (
        <main>
          <LogoComponent />
          <SearchBarComponent />
          <ButtonsComponent />
        </main>
        )
}

export default BodyComponent