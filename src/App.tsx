import Hero from './components/Hero'
import BentoSection from './components/BentoSection'
import Projects from './components/Projects'
import BeyondSection from './components/BeyondSection'
import Process from './components/Process'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <div className="film-grain" aria-hidden="true" />
      <Hero />
      <BentoSection />
      <Projects />
      <BeyondSection />
      <Process />
      <Contact />
    </main>
  )
}
