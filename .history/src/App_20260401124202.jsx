import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import CustomerTickets from './component/CustomerTickets/CustomerTickets'
import TaskStatus from './component/TaskStatus/TaskStatus'

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
   <div className='flex bg-base-200 mt-5'>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
          <CustomerTickets customerPromise={customerPromise}></CustomerTickets>
          <TaskStatus></TaskStatus>

    </Suspense>
   </div>
   </div>
  
    </>
  )
}

export default App
