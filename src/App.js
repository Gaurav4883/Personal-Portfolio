import './App.css';
import NavBar from "./components/NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner.js';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
