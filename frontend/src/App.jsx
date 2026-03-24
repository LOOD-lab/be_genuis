import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Rapport from './components/Rapport'
import Vision from './components/Vision'
import EventBanner from './components/EventBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminApp from './admin/AdminApp'

const isAdmin = window.location.pathname.startsWith('/admin')

function App() {
  if (isAdmin) return <AdminApp />

  return (
    <div className="font-sans">
      <AnnouncementBar />
      <Header />
      <Hero />
      <Mission />
      <Rapport />
      <Vision />
      <EventBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
