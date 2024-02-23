import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from 'c:/Users/litsa/Projects/Boolean-Other/react-components-intro/src/header'
import Main from 'c:/Users/litsa/Projects/Boolean-Other/react-components-intro/src/main'
import Footer from 'c:/Users/litsa/Projects/Boolean-Other/react-components-intro/src/footer'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App