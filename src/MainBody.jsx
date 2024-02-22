import GoogleImg from "./GoogleImg";
import MainBodyBtn from "./MainBodyBtn";
function MainBody() {
  return (
    <main>
      <GoogleImg />
      <input className="search-bar" type="search" />
      <MainBodyBtn />
    </main>
  );
}

export default MainBody;