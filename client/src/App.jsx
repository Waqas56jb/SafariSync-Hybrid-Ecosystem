import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Tours from './components/Tours'
import Gallery from './components/Gallery'
import HowItWorks from './components/HowItWorks'
import Concierge from './components/Concierge'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import Dashboard from './components/Dashboard/Dashboard'

export default function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState('login')
  const [dashOpen, setDashOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = authOpen || dashOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [authOpen, dashOpen])

  const openAuth = (tab = 'login') => {
    setAuthTab(tab)
    setAuthOpen(true)
  }

  const handleLogin = () => {
    setAuthOpen(false)
    setDashOpen(true)
  }

  const handleLogout = () => {
    setDashOpen(false)
  }

  return (
    <>
      {!dashOpen && (
        <>
          <Header onOpenAuth={openAuth} />
          <Hero onOpenAuth={openAuth} />
          <Tours onOpenAuth={openAuth} />
          <Gallery />
          <HowItWorks />
          <Concierge />
          <Testimonials />
          <CTA onOpenAuth={openAuth} />
          <Footer />
        </>
      )}

      <AuthModal
        open={authOpen}
        tab={authTab}
        onClose={() => setAuthOpen(false)}
        onSwitchTab={setAuthTab}
        onLogin={handleLogin}
      />

      <Dashboard open={dashOpen} onLogout={handleLogout} />
    </>
  )
}
