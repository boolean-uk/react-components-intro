import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import App from './App'
import './styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <App />
    <Header />
      <Main />
      <Footer />
  </StrictMode>,
  rootElement
)
