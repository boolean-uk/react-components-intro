import './App.css'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import MainBodyComponent from './components/MainBodyComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainBodyComponent/>
      <FooterComponent/>
    </div>
  )
}

export default App;
