import Button from "./Button";

function Main() {
  return (
    <main>
      <img
        className="logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      <input className="search-bar" type="search" />
      <Button />
    </main>
  );
}

export default Main;
