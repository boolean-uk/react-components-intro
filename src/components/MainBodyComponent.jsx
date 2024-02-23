import LogoComponent from "./mainBody/LogoComponent"
import SearchComponent from "./mainBody/SearchComponent"
import ButtonsComponent from "./mainBody/ButtonsComponent"

function MainBodyComponent(){
    return (
        <main>
        <LogoComponent/>
        <SearchComponent/>
        <ButtonsComponent/>
      </main>
    )
}

export default MainBodyComponent