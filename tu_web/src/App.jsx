import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/home'
import ScrollToTop from "./components/scrollToTop"
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'


function App() {
  const basename = "";
  
  return (
    <div className="bg-info-subtle vh-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
            </Routes>
            <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
