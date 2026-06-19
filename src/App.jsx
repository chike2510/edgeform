import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MobileNav from './components/MobileNav'
import SplashCursor from './animations/SplashCursor'
import { Aurora, Spotlight } from './animations/Aurora'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { Pricing, About } from './pages/PricingAbout'

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Global ambient layers */}
      <Aurora />
      <Spotlight />
      <SplashCursor />

      {/* Navigation */}
      <NavBar />
      <MobileNav />

      {/* Pages */}
      <Routes>
        <Route path="/"          element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing"   element={<Pricing />} />
        <Route path="/about"     element={<About />} />
      </Routes>
    </div>
  )
}
