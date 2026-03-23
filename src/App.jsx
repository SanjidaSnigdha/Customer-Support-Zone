import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar></Navbar>
   <Banner></Banner>
    </>
  )
}

export default App
