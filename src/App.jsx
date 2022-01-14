import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";



function App() {
  return (
    <div className="App">
      <Header />
      <div className="routes" >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
