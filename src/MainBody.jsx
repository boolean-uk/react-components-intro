import Buttons from "./Buttons";
import SearchBar from "./SearchBar";

function MainBody() {
  return (
    <main>
      <img
        className="logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      <SearchBar />
      <Buttons />
    </main>
  );
}

export default MainBody;
