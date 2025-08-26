import { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster></Toaster>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
