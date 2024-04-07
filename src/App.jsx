import React from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      {/* <p>Hello</p> */}
    </div>
  )
}

export default App
