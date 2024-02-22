import '../../App.css';
import Search from './search';

function Main () {
    return (
    <main>
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
        <Search />
    </main>
    )
}

export default Main;