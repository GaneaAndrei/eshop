import { useEffect, useState } from 'react'
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
import Products from './components/Products'
import Blogs from './components/Blogs'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    Aos.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100
      });
      Aos.refresh()
  },[])

  return <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
    <Navbar/>
    <Hero/>
    <Category/>
    <Services/>
    <Banner/>
    <Products/>
    <Blogs/>
    <Partners/>
    <Footer/>
  </div>
}

export default App
