import Searchbar from "./Searchbar/Searchbar";

const Main = () => {
    return (
        <main>
            <img
                className="logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google logo"
            />
            <Searchbar />
            <div className="buttons">
                <button>Google Search</button>
                <button>Feeling Lucky</button>
            </div>
        </main>
    );
};

export default Main;
