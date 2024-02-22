import ButtonsComponent from "./maincomponent/ButtonsComponent";
import SearchbarComponent from "./maincomponent/SearchbarComponent";


const MainComponent = () => {
  return (
    <div className="main-item">
       <main>
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
        <SearchbarComponent/>
        <ButtonsComponent/>
      </main>
    </div>
  )
};

export default MainComponent;