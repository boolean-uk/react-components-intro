import Search from "./Search"

function MainSection(){

    return(
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

export default MainSection