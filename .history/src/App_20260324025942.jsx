import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTickets from './component/CustomerTickets/CustomerTickets'

const fetchTickets = async()=>{
  const res = await fetch("/customers.json")
  return res.json()
}

function App() {
  const customerPromise = fetchTickets()

  return (
    <>
    <div className='flex flex-col'>
   <Navbar></Navbar>
   <div className='flex-1 bg-base-200'>
    <Banner></Banner>
    <Suspense>
          <CustomerTickets customerPromise={customerPromise}></CustomerTickets>

    </Suspense>
   </div>
   </div>
  
    </>
  )
}

export default App
