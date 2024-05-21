import React, { useEffect, useRef } from 'react'
import Header from './Components/Header'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

const App = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        {/* <Route element={About} path='/about' /> */}
      </Routes>
      {/* <p>Hello</p> */}
      <MdKeyboardDoubleArrowUp onClick={handleScrollToTop} className=' text-white flex items-center justify-center rounded-full p-[0.6rem] bg-[#00A944] fixed right-4 z-[100000] text-[2.7rem] bottom-4 shadow-sm shadow-white cursor-pointer' />
    </div>
  )
}

export default App
