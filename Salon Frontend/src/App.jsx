import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home/Home'
import Gallery from './Pages/Gallery'


import Contact from './Pages/Contact'
import ServiceDetial from './Pages/Services/ServicesHero'
import Bookappoinment from './Pages/Bookappoinment'
import AboutUS from './Pages/AboutUS'
import Footer from './Component/Footer'
import ServicePage from './Pages/Services/ServicePage'

const App = () => {
  return (
    <div>
      {/* this page present all page */}
      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Gallery' element={<Gallery/>}/>
       <Route  path='/Contact' element={<Contact/>}/>
       <Route  path='/ServiceDetial' element={<ServiceDetial/>}/>
       <Route  path='/Bookappoinment' element={<Bookappoinment/>}/>
       <Route  path='/AboutUS' element={<AboutUS/>}/>
       <Route  path='/service/:type' element={<ServicePage/>}/>

      

       </Routes>
       <Footer /> 

    </div>
  )
}

export default App
