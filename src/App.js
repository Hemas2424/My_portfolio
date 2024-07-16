import Navbar from "./components/Navbar/Navbar.js";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.js";
import Projects from "./components/Projects/projects.js"
import Learn from "./components/Learn/learn.js"
import Contact from "./components/Contact/contact.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Learn/>
      <Contact/>
    </div>   
  );
}

export default App;


