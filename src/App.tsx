import './App.css'
import About from './app/about'
import Education from './app/education'
import Experience from './app/experience'
import Footer from './app/footer.tsx'
import Home from './app/home'
import Navbar from './app/navbar'
import Roles from './app/roles'
import Skills from './app/skills'

function App() {
  return (
    <div className="app">
      <Home />

      <div className="scroll-section">
        <Navbar />
        <About />
        <Roles/>
        <Experience/>
        <Education/>
        <Skills/>
        <Footer/>
      </div>
    </div>
  )
}

export default App