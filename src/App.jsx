import Navbar from './Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.08),transparent_60%)]">
      <Navbar />

      <main>
        <Hero />

        <Section id="work" eyebrow="Selected Work" title="A few projects I’m proud of">
          <Projects />
        </Section>

        <Section id="skills" eyebrow="Core Skills" title="The toolkit I reach for">
          <Skills />
        </Section>

        <Section id="about" eyebrow="About" title="A designerly frontend engineer">
          <About />
        </Section>

        <Section id="contact" eyebrow="Get in touch" title="Let’s build something delightful">
          <Contact />
        </Section>
      </main>

      <footer className="border-t border-white/20 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — Built with care.
      </footer>
    </div>
  )
}

export default App
