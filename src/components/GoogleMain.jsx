import GoogleLogo from "./GoogleLogo";

export default function GoogleMain() {
  return (      
    <main>
      <GoogleLogo />
      <input className="search-bar" type="search" />
      <div className="buttons">
        <button>Google Search</button>
        <button>Feeling Lucky</button>
      </div>
    </main>
  )
}