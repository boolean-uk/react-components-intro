import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainComponent from "./MainComponent";

export default function App() {
  return (
    <>
      <div className="App">
        <header>
          <Header></Header>
        </header>

        <main>
          <MainComponent></MainComponent>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
