import './App.css'
import './components/HeaderComponent'
import Header from './components/HeaderComponent'
import Main from './components/MainComponent'
import Footer from './components/FooterComponent'

function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer/>
    </div>
  )
}

export default App;
