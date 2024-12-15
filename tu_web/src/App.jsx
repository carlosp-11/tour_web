import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/home'
import ScrollToTop from "./components/scrollToTop"
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const basename = "";
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
            { /*<Navbar />*/}
            <Routes>
              <Route element={<Home />} path="/" />
            </Routes>
            {/*<Footer />*/}
        </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App
