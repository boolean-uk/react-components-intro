import './App.css'
import Search from './Components/BodySearch.jsx'


function Body() {
    return (
        <main>
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
        <Search /> 
      </main>
    )
}

export default Body; 