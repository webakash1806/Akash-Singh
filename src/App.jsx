import React from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import Resume from './Pages/Resume'

const App = () => {
  return (
    <div className=''>
      <Header />
      <Home />
      <About />
      <Resume />
      {/* <p>Hello</p> */}
    </div>
  )
}

export default App
