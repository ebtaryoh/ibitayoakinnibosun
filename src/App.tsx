import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Ibitayo Akinnibosun. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
