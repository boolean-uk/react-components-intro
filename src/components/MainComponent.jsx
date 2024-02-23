import ImgComponent from "../extension/ImgComponent"
import ButtonsComponent from "../extension/ButtonsComponent"

function MainComponent() {
    return (<main>
    <ImgComponent/>
    <input className="search-bar" type="search" />
    <ButtonsComponent/>
  </main>
    )
}

export default MainComponent