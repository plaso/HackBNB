import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Apartments from './pages/Apartments'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import ApartmentDetail from './pages/ApartmentDetail'

function App() {
  return (
    <div>
      <Navbar />

      <div className='container mt-4'>
        <Routes>
          <Route path="/" element={<Home title="Welcome to HackBNB" />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:apartmentId" element={<ApartmentDetail />} />
          <Route path="/apartments/contact" element={<Home title="Example" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
