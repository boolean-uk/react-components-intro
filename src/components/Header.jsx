import React from 'react'
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';





class Header extends React.Component {
    render() {
      return(      
      <header>
        <LeftMenu />

        <RightMenu />

      </header>) 
      
      }
    }

    export default Header;