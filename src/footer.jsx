// Footer.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)
function Footer() {
  return (
    <footer>
      <p className="country">United Kingdom</p>
    </footer>
  );
}

export default Footer
