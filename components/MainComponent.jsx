import LogoComponent from "./LogoComponent"
export default function MainComponent(){
return (

<main>
        <LogoComponent />
        <input className="search-bar" type="search" />
        <div className="buttons">
          <button>Google Search</button>
          <button>Feeling Lucky</button>
        </div>
      </main>

)}