import './App.css'

function App() {
  return (
    <div className="App">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
    </div>
  )
}

function HeaderComponent () 
{
  return (
    <header>
      <LeftMenuComponent />
      <RightMenuComponent />
    </header>
  )
}

function LeftMenuComponent () 
{
  return (
    <nav className="left-menu">
          <ul>
            <li>About</li>
            <li>Store</li>
          </ul>
    </nav>
  )
}

function RightMenuComponent () 
{
  return (
    <nav className="right-menu">
          <ul>
            <li>Gmail</li>
            <li>Images</li>
            <li>
              <MenuIconComponent />
            </li>
            <li>
              <AvatarComponent />
            </li>
          </ul>
     </nav>
  )

}

function MenuIconComponent () {
  return (
    <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
        <path
          d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
    </svg>
  )
}
function AvatarComponent () {
  return (
    <img
        src="https://lh3.google.com/u/0/ogw/ADGmqu9SnLFSXSNhQekSAI8qQNn9h-VAhGGPPtNZefIQ=s64-c-mo"
        alt="avatar"
        className="avatar"
    />
  )

}


function MainComponent () 
{
  return (
    <main>
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
        <input className="search-bar" type="search" />
        <div className="buttons">
          <button>Google Search</button>
          <button>Feeling Lucky</button>
        </div>
      </main>
  )

}

function FooterComponent () 
{
  return (
    <footer>
      <p className="country">United Kingdom</p>
    </footer>
  )
}

export default App;
