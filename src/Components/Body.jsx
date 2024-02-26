import ButtonsComponent from "./Body/Buttons"
import LogoComponent from "./Body/Logo"
import SearchbarComponent from "./Body/Searchbar"

function BodyComponent() {
    return (
        <main>
            <LogoComponent />
            <SearchbarComponent />
            <ButtonsComponent />
        </main>)
}

export default BodyComponent