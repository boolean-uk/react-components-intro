import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import MainComponent from './MainComponent.jsx'
import FooterComponent from './FooterComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
    <HeaderComponent/>
    <MainComponent/>
    <FooterComponent/>
    </div>
  </React.StrictMode>,
)
