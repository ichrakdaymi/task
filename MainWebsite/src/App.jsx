import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import {
  HeroSection,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Categories,
  FeedBack,
  CTA,
  Footer
} from './components'
import ComingSoon from './Pages/comingsoon'
import { Toaster } from 'react-hot-toast'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <FeedBack />
      <CTA />
      <Footer />

   
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
        </Routes>

       
      </div>
          <Toaster position="top-center" />
    </Router>
  )
}

export default App
