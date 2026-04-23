import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home.jsx'
import PerformanceList from './components/PerformanceList.jsx'
import PerformanceDetail from './components/PerformanceDetail.jsx'
import MapView from './components/MapView.jsx'
import Favorites from './components/Favorites.jsx'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavLink to="/" className="brand">🎭 주말뭐해</NavLink>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PerformanceList />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/perf/:id" element={<PerformanceDetail />} />
        </Routes>
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" end>🏠<span>홈</span></NavLink>
        <NavLink to="/list">📋<span>목록</span></NavLink>
        <NavLink to="/map">🗺️<span>지도</span></NavLink>
        <NavLink to="/favorites">⭐<span>찜</span></NavLink>
      </nav>
    </div>
  )
}
