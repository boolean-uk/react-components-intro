import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import App from './App.jsx'
import Footer  from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <Header/>
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)
