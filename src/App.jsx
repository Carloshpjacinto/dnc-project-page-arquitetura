import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// PAGES
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router> 
  )
}

export default App
