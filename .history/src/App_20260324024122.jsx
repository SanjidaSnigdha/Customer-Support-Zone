import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTickets from './component/CustomerTickets/CustomerTickets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col'>
   <Navbar></Navbar>
   <div className='flex-1 bg-base-300'>
    <Banner></Banner>
    <CustomerTickets></CustomerTickets>
   </div>
   </div>
  
    </>
  )
}

export default App
