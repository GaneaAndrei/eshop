import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/Hero'
import Category from './components/Category'
import Services from './components/Services'
import Banner from './components/Banner'

function App() {


  return <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
    <Navbar/>
    <Hero/>
    <Category/>
    <Services/>
    <Banner/>
  </div>
}

export default App
