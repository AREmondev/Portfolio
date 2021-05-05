import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project'
import Services from './components/Services/Services'

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <About />
      <Services />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
