import "./Main.css"
import MainSearchFeature from "./MainSearchFeature/MainSearchFeature"

const Main = () => {
    return (
    <main>
        <img
        className="logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
        />
        <MainSearchFeature></MainSearchFeature>
    </main>
    )
}

export default Main