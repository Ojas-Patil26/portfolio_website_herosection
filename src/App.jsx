import Hero from './components/Hero.jsx'

function App() {
  return (
    <>
      <Hero />

      {/*
        Scroll room so the hero video scrubs as you scroll.
        Empty anchor targets keep the navbar links from dead-ending —
        real sections get built later.
      */}
      <main className="placeholder-sections">
        <section id="about" />
        <section id="experience" />
        <section id="skills" />
        <section id="projects" />
        <section id="fun" />
        <section id="contact" />
      </main>
    </>
  )
}

export default App
