import React from 'react'
import Buttons from './Buttons'
import HomeImage from './HomeImage'

function MainComponent() {
  return (
    <>
    <main>
        <HomeImage/>
        <input className="search-bar" type="search" />
        <Buttons/>
      </main>
    </>
  )
}

export default MainComponent