import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col'>
   <Navbar></Navbar>
   <div className='flex-1 bg-base-100'>
    <Banner></Banner>
   </div>
   </div>
  
    </>
  )
}

export default App
