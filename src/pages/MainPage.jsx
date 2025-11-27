import React from 'react'
import Header from '../component/header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'

export const MainRouter = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className='flex-1'>
             <Outlet/>
        </div>
     
        <Footer/>

    </div>
  )
}

export default MainRouter
