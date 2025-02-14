import { BrowserRouter, Route, Routes } from "react-router-dom"
//import injectContext from "./store/appContext";
import { GlobalProvider } from "./store/GlobalContext.jsx";
import { Dashboard } from "../src/pages/Dashboard"
import { Footer } from '../src/components/Footer'
import { Home } from '../src/pages/Home.jsx'
import { LegalAdvice } from "./pages/LegalAdvice.jsx"
import { Login } from "../src/pages/Login"
import { Navbar } from '../src/components/Navbar'
//import ProtectedRoute from "../src/pages/ProtectedRoute.jsx"
// import { AuthProvider } from "../src/store/AuthContext.jsx"
import { Contact } from "./pages/Contact.jsx"
import { About } from "./pages/About.jsx"
import { Services } from "./pages/Services.jsx"
import { Selling } from "./pages/Selling.jsx"
import { Renting } from "./pages/Renting.jsx"
import { Purchasing } from "./pages/Purchasing.jsx"
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import ScrollToTop from "../src/components/scrollToTop"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'


function App() {
  const basename = "";
  
  return (
    <div className="bg-white d-flex flex-column min-vh-100">
      {/* <AuthProvider> */}
      <GlobalProvider>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
              <Navbar />
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Contact />} path="/contacto" />
                <Route element={<About />} path="/nosotros" />
                <Route element={<Services />} path="/servicios" />
                <Route element={<Login />} path="/login" />
                <Route element={<Selling />} path="/vender" />
                <Route element={<Renting />} path="/alquilar" />
                <Route element={<Purchasing />} path="/comprar" />
                <Route element={<LegalAdvice />} path="/aviso-legal" />
                <Route element={<LegalAdvice />} path="/politica-cookies" />
                <Route element={<LegalAdvice />} path="/politica-privacidad" />
                <Route element={<Dashboard />} path="/dashboard" />
                {/* <Route path="/dashboard"
                  element={
                    <ProtectedRoute> <Dashboard /> </ProtectedRoute>
                  }
                /> */}

              </Routes>
              <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </GlobalProvider>
      {/* </AuthProvider> */}

    </div>
  )
}

export default App
