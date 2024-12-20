import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/home'
import ScrollToTop from "./components/scrollToTop"
import { Navbar } from './components/Navbar'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const basename = "";
  

  return (
    <div className="bg-secondary vh-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
            </Routes>
            {/*<Footer />*/}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
