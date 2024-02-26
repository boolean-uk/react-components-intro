import ButtonComponent from "./Body/Button";
import LogoComponent from "./Body/Logo";
import SearchbarComponent from "./Body/SearchBar";

function BodyComponent() {
    return (
        <main>
            <LogoComponent/>
            <SearchbarComponent/>
            <ButtonComponent/>
        </main>
    )
}

export default BodyComponent