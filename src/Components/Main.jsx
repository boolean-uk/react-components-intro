import SearchComponent from "./SearchComponent";

export default function Main() {
    return (
        <main>
            <img
                className="logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google logo"
            />
            <SearchComponent />
        </main>
    )
}