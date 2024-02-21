import Nav from "./Nav";

function HeaderSection() {
  function leftMenuLiElems() {
    let elems = ["About", "Store"];
    return elems;
  }

  function rightMenuLiElems() {
    let elems = [
      "Gmail",
      "images",
      (<svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
      </svg>),
      (<img
        src="https://lh3.google.com/u/0/ogw/ADGmqu9SnLFSXSNhQekSAI8qQNn9h-VAhGGPPtNZefIQ=s64-c-mo"
        alt="avatar"
        className="avatar"
      />)
    ];

    return elems;
  }

  return (
    <header>
      <Nav navClass="left-menu" liElements={leftMenuLiElems()} />
      <Nav navClass="right-menu" liElements={rightMenuLiElems()} />

    </header>
  );
}

export default HeaderSection;
