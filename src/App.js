import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Casts from './pages/Casts'
import Stitches from './pages/Stitches'
import Materials from './pages/Materials'
import CastCard from './components/CastCard'
import StitchCard from './components/StitchCard'
import MaterialCard from './components/MaterialCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casts" element={<Casts />} />
          <Route path="/casts/:id" element={<CastCard />} />
          <Route path="/stitches" element={<Stitches />} />
          <Route path="/stitches/:id" element={<StitchCard />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/materials/:id" element={<MaterialCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
