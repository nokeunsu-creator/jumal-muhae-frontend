import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Onboarding, { shouldShowOnboarding } from './components/Onboarding.jsx'
import Home from './components/Home.jsx'
import PerformanceList from './components/PerformanceList.jsx'
import PerformanceDetail from './components/PerformanceDetail.jsx'
import MapView from './components/MapView.jsx'
import Favorites from './components/Favorites.jsx'
import More from './components/More.jsx'
import CollectionView from './components/CollectionView.jsx'
import About from './components/more/About.jsx'
import Guide from './components/more/Guide.jsx'
import Terms from './components/more/Terms.jsx'
import Privacy from './components/more/Privacy.jsx'
import Contact from './components/more/Contact.jsx'
import Licenses from './components/more/Licenses.jsx'
import AppInfo from './components/more/AppInfo.jsx'

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(() => shouldShowOnboarding())

  if (showOnboarding) {
    return <Onboarding onFinish={() => setShowOnboarding(false)} />
  }

  return (
    <div className="app">
      <header className="app-header">
        <NavLink to="/" className="brand">🎫 주말뭐해</NavLink>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PerformanceList />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/perf/:id" element={<PerformanceDetail />} />
          <Route path="/collections/:key" element={<CollectionView />} />
          <Route path="/more" element={<More />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/app-info" element={<AppInfo />} />
        </Routes>
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" end>🏠<span>홈</span></NavLink>
        <NavLink to="/list">📋<span>목록</span></NavLink>
        <NavLink to="/map">🗺️<span>지도</span></NavLink>
        <NavLink to="/favorites">⭐<span>찜</span></NavLink>
        <NavLink to="/more">⋯<span>더보기</span></NavLink>
      </nav>
    </div>
  )
}
