
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import OrderNow from './pages/OrderNow/OrderNow'
import TandooriCatering from './pages/TandooriCatering/TandooriCatering'
import Locations from './pages/Locations/Locations'
import Franchising from "./pages/Franchising/Franchising"
import Gallery from './pages/Gallery/Gallery'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/tandoori-catering" element={<TandooriCatering />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>

    </>
  )
}

export default App
