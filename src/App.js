import Rightmenu from './components/Rightmenu';
import Leftmenu from './components/leftmenu';
import Logo from './components/Logo';
import Searchbar from './components/Searchbar';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Leftmenu />

        <Rightmenu />
      </header>

      <main>
        <Logo />
        <Searchbar />
        <Buttons />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
