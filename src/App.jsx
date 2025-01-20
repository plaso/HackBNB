import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Apartments from './pages/Apartments'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />

      <div>
        
      </div>
      <Routes>
        <Route path="/" element={<Home title="Welcome to HackBNB" />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
