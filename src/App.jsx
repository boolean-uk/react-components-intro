import './App.css'
import BodyComponent from './Components/Body';
import FooterComponent from './Components/Footer';
import HeaderComponent from './Components/Header';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponent/>
      <FooterComponent/>
    </div>
  )
}

export default App;
