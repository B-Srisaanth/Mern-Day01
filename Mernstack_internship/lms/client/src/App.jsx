import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;