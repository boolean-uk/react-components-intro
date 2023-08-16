import './../styles.css'
import MainButtons from './MainButtons'
import MainImage from './MainImage'

function Main() {
    return (
        <main>
            <MainImage />
            <input className="search-bar" type="search" />
            <div className="buttons">
                <MainButtons />
            </div>
      </main>
    )
}

export default Main