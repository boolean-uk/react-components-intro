import './App.css'
import MainBody from './Body';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>

      <main>
        <MainBody></MainBody>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App;
