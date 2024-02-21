import Buttons from "./MainButtons";
function MainBody() {
  return (
    <main>
      <img
        className="logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      <input className="search-bar" type="search" />
      <Buttons />
    </main>
  );
}

export default MainBody;
