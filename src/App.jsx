import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx"
import BodyComponent from './components/BodyComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
    </div>
  )
}

export default App;
